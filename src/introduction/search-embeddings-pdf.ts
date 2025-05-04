import {
  PGVectorStore,
  DistanceStrategy,
} from "@langchain/community/vectorstores/pgvector";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PoolConfig } from "pg";


// Main function to run the PDF loading
async function main() {
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });

  // Sample config
  const config = {
    postgresConnectionOptions: {
      type: "postgres",
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "postgres",
      database: "vectordb",
    } as PoolConfig,
    tableName: "testlangchainjs",
    columns: {
      idColumnName: "id",
      vectorColumnName: "vector",
      contentColumnName: "content",
      metadataColumnName: "metadata",
    },
    // supported distance strategies: cosine (default), innerProduct, or euclidean
    distanceStrategy: "cosine" as DistanceStrategy,
  };

  const vectorStore = await PGVectorStore.initialize(embeddings, config);

  const results = await vectorStore.similaritySearch("Quais as Lula aposta em pautas populares?", 5);
  console.log(results);

  await vectorStore.end();
}

// Execute the main function
main().catch(console.error);
