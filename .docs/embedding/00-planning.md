## 📅 **Cronograma de Estudos Prático (8 Semanas)**

### 🔹 **Semana 1 – Fundamentos de Embeddings**

**Objetivo:** Compreender e aplicar embeddings em textos reais.

- **Estudo Guiado:**
    - O que são embeddings? (textos para vetores)
    - Ferramentas: `OpenAI Embeddings`, `SentenceTransformers`, `FAISS`
- **Prática:**
    - Carregue um conjunto de notícias ou documentos PDF e gere embeddings.
    - Armazene no FAISS ou ChromaDB.
- **Desafio:**
    - Crie um buscador semântico local (ex: "pesquise termos parecidos em notícias" usando Similarity Search).

### 🔹 **Semana 2 – Embeddings no mundo real**

**Objetivo:** Resolver problemas do dia a dia com busca semântica.

- **Case Real:**
    - Crie um FAQ inteligente para atendimento (ex: dados de clientes, manuais ou e-mails).
- **Prática:**
    - Indexar dados reais e construir API de busca contextual.
- **Desafio:**
    - Criar uma mini ferramenta onde você digita algo e ela retorna o contexto mais próximo.

### 🔹 **Semana 3 – Introdução ao RAG**

**Objetivo:** Combinar embeddings + LLM para respostas inteligentes com base em documentos.

- **Estudo Guiado:**
    - O que é RAG? (Pipeline: Entrada → Recuperação de contexto → Geração de resposta)
    - Ferramentas: LangChain, LlamaIndex, OpenAI, Chroma
- **Prática:**
    - Faça RAG com base em seus próprios PDFs ou Notion exportado.
- **Desafio:**
    - Sistema que responde perguntas sobre uma base jurídica ou técnica (ex: normas ABNT ou documentação de API).

### 🔹 **Semana 4 – RAG aplicado ao mundo real**

**Objetivo:** Resolver problemas com base em documentos externos e não treinados.

- **Case Real:**
    - Construa um chatbot que responde sobre produtos ou contratos de uma empresa.
- **Desafio:**
    - Use dados de clientes reais (com permissão), contratos, ou documentação interna.

### 🔹 **Semana 5 – Introdução ao Fine-tuning**

**Objetivo:** Compreender e implementar técnicas de fine-tuning para modelos de linguagem.

- **Estudo Guiado:**
    - O que é Fine-tuning? (Adaptação de modelos para domínios específicos)
    - Ferramentas: Hugging Face Transformers, PEFT, LoRA
    - Técnicas: Full Fine-tuning vs Parameter-Efficient Fine-tuning
- **Prática:**
    - Prepare um dataset para fine-tuning
    - Implemente fine-tuning em um modelo base (ex: BERT, GPT-2)
- **Desafio:**
    - Crie um modelo especializado em um domínio específico (ex: jurídico, médico, técnico)

### 🔹 **Semana 6 – Fine-tuning Aplicado**

**Objetivo:** Aplicar fine-tuning em cenários reais e otimizar modelos.

- **Case Real:**
    - Fine-tune um modelo para entender melhor sua base de conhecimento específica
    - Compare resultados entre RAG e Fine-tuning
- **Prática:**
    - Implemente técnicas de otimização (LoRA, QLoRA)
    - Avalie e compare diferentes abordagens
- **Desafio:**
    - Crie um pipeline completo de fine-tuning com avaliação de qualidade

### 🔹 **Semana 7 – Introdução ao MCP**

**Objetivo:** Compreender e implementar o Model Context Protocol para melhorar a interação com IA.

- **Estudo Guiado:**
    - O que é MCP? (Protocolo para padronização de contexto)
    - Ferramentas: MCP Server, MCP Client, Schema
- **Prática:**
    - Implemente um servidor MCP básico e conecte com uma IDE.
- **Desafio:**
    - Crie uma extensão que fornece contexto em tempo real para um modelo de IA.

### 🔹 **Semana 8 – MCP aplicado ao mundo real**

**Objetivo:** Aplicar MCP em cenários reais de desenvolvimento e produtividade.

- **Case Real:**
    - Desenvolva uma integração MCP para uma ferramenta de desenvolvimento.
- **Desafio:**
    - Implemente um sistema que melhora a produtividade usando contexto em tempo real.

### 🔹 **Semana 9 – Introdução a AI Agents**

**Objetivo:** Criar agentes que interajam com ferramentas e dados para resolver tarefas complexas.

- **Estudo Guiado:**
    - O que são AI Agents? (LangGraph, AutoGen, CrewAI)
    - Como funcionam as "ferramentas" dos agentes.
- **Prática:**
    - Monte um agente que faz perguntas, busca no Google (ou simula), lê PDFs e responde.
- **Desafio:**
    - Agente que lê uma tarefa (ex: "faça um resumo deste relatório e envie por e-mail") e executa.

### 🔹 **Semana 10 – Projeto Final: Aplicação Real**

**Objetivo:** Consolidar tudo em uma aplicação que resolva um problema real.

- **Opções de Projeto Final:**
    - Um agente de atendimento inteligente com RAG.
    - Um sistema que lê e interpreta contratos ou relatórios.
    - Um assistente pessoal que agenda compromissos, responde e-mails e resume documentos.
- **Desafio:**
    - Documentar, publicar no GitHub e, se possível, colocar online via Vercel ou Render.

---

## 📌 **Ferramentas recomendadas**

- **Python + LangChain / LlamaIndex / Chroma / FAISS**
- **OpenAI API ou Mistral/LLama2 (via Ollama)**
- **Streamlit ou Gradio para interfaces rápidas**
- **GitHub + Git para versionamento**
- **Notion ou Obsidian para organizar seus estudos**
- **MCP Server e Client para contexto em tempo real**
- **LangGraph / AutoGen / CrewAI para AI Agents**
- **Hugging Face Transformers e PEFT para Fine-tuning**