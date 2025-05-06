import path from "path";
import fs from "fs";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { createVectorStore } from "./search-agents";

const jsonDirectory = path.join(process.cwd(), "tmp", "agents-data");

async function loadJSONsFromDirectory() {
  const files = fs.readdirSync(jsonDirectory);
  const jsonFiles = files.filter((file) =>
    file.toLowerCase().endsWith(".json")
  );

  return jsonFiles.map((file) => {
    const filePath = path.join(jsonDirectory, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    return {
      content: JSON.parse(content),
      filePath
    };
  });
}

async function loadDocs() {
  const jsonFiles = await loadJSONsFromDirectory();
  const docs: Document[] = [];

  jsonFiles.forEach(({ content, filePath }) => {
    content.concepts.forEach((concept: any) => {
      const doc = new Document({
        pageContent: `Conceito: ${concept.title}\nDescrição: ${concept.description}\nDetalhes: ${concept.details}`,
        metadata: {
          id: concept.id,
          category: content.category,
          tags: concept.tags,
          last_updated: concept.last_updated,
          ...(concept.examples && { examples: concept.examples }),
          ...(concept.best_practices && { best_practices: concept.best_practices }),
          ...(concept.complexity && { complexity: concept.complexity })
        }
      });
      docs.push(doc);
    });
  });

  return docs;
}

async function main() {
  const docs = await loadDocs();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const splitDocs = await splitter.splitDocuments(docs);

  const vectorStore = await createVectorStore();

  await vectorStore.addDocuments(splitDocs);

  await vectorStore.end();
}

main().catch(console.error); 