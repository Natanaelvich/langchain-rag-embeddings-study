import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts";
import { createVectorStore } from "./search-agents";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";
import * as readline from 'readline';

const openAiChat = new ChatOpenAI({
  model: "gpt-4",
  temperature: 0,
});

const promptTemplate = new PromptTemplate({
  template: `
Você é um assistente especializado em AI Agents que responde perguntas com base no contexto fornecido.

Contexto:
{context}

Pergunta:
{question}

Instruções:
- Responda à pergunta com base apenas nas informações fornecidas no contexto acima.
- Se a informação necessária para responder à pergunta não estiver no contexto, responda com "Não tenho informações suficientes para responder a essa pergunta."
- Seja claro, conciso e útil em suas respostas.
- Não invente informações que não estejam presentes no contexto.
- Mantenha o foco em conceitos relacionados a AI Agents.
`.trim(),
  inputVariables: ["context", "question"],
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (rl: readline.Interface): Promise<string> => {
  return new Promise((resolve) => {
    rl.question('\nFaça sua pergunta sobre AI Agents (ou digite "sair" para encerrar): ', (answer) => {
      resolve(answer);
    });
  });
};

async function main() {
  const vectorStore = await createVectorStore();

  const chain = RunnableSequence.from([
    {
      context: async (input: { question: string }) => {
        const docs = await vectorStore.similaritySearch(input.question, 3);
        console.log(docs);
        return formatDocumentsAsString(docs);
      },
      question: (input: { question: string }) => input.question,
    },
    promptTemplate,
    openAiChat,
    new StringOutputParser(),
  ]);

  console.log('Bem-vindo ao chat sobre AI Agents! Você pode fazer perguntas sobre conceitos, aplicações e implementações de AI Agents.');
  
  while (true) {
    const question = await askQuestion(rl);
    
    if (question.toLowerCase() === 'sair') {
      console.log('Encerrando o chat. Até logo!');
      break;
    }

    try {
      const result = await chain.invoke({
        question: question,
      });
      console.log('\nResposta:', result);
    } catch (error) {
      console.error('Erro ao processar a pergunta:', error);
    }
  }

  rl.close();
}

main().catch(console.error); 