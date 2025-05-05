import { JSONLoader } from "langchain/document_loaders/fs/json";
import path from "path";
import fs from "fs";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { createVectorStore } from "./search-faq";

const jsonDirectory = path.join(process.cwd(), "tmp", "faq-data");

// Função para carregar todos os JSONs do diretório
async function loadJSONsFromDirectory() {
  // readdirSync lê o conteúdo de um diretório de forma síncrona
  // Retorna um array com os nomes dos arquivos no diretório
  const files = fs.readdirSync(jsonDirectory);
  
  // Filtra apenas os arquivos JSON do diretório
  const jsonFiles = files.filter((file) =>
    file.toLowerCase().endsWith(".json")
  );

  // JSONLoader é uma utilidade do LangChain que:
  // 1. Carrega arquivos JSON e os converte em objetos Document
  // 2. Preserva a estrutura dos dados JSON
  // 3. Disponibiliza o conteúdo para processamento de texto e embedding
  const loaders = jsonFiles.map((file) => {
    const filePath = path.join(jsonDirectory, file);
    return new JSONLoader(filePath);
  });

  return loaders;
}

async function loadDocs() {
  const loaders = await loadJSONsFromDirectory();
  const docs: Document[] = [];

  await Promise.all(
    loaders.map(async (loader) => {
      const docsLoaded = await loader.load();
      docs.push(docsLoaded[0]);
    })
  );

  return docs;
}

// Função principal para carregar os JSONs
async function main() {
  const docs = await loadDocs();

  // RecursiveCharacterTextSplitter é uma utilidade de divisão de texto que:
  // 1. Divide o texto em pedaços menores mantendo o conteúdo relacionado junto
  // 2. Usa uma abordagem recursiva para dividir em diferentes caracteres (quebras de linha, pontos, etc.)
  // 3. Mantém uma sobreposição entre os pedaços para preservar o contexto
  // 4. Ajuda a prevenir perda de informação ao processar documentos longos
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,    // Tamanho máximo de cada pedaço de texto
    chunkOverlap: 200,  // Número de caracteres para sobrepor entre os pedaços
  });

  const splitDocs = await splitter.splitDocuments(docs);

  const vectorStore = await createVectorStore();

  await vectorStore.addDocuments(splitDocs);

  await vectorStore.end();
}

// Executa a função principal
main().catch(console.error);
