## 📅 **Cronograma de Estudos Prático (6 Semanas)**

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

---

### 🔹 **Semana 3 – Introdução ao RAG**

**Objetivo:** Combinar embeddings + LLM para respostas inteligentes com base em documentos.

- **Estudo Guiado:**
    - O que é RAG? (Pipeline: Entrada → Recuperação de contexto → Geração de resposta)
    - Ferramentas: LangChain, LlamaIndex, OpenAI, Chroma
- **Prática:**
    - Faça RAG com base em seus próprios PDFs ou Notion exportado.
- **Desafio:**
    - Sistema que responde perguntas sobre uma base jurídica ou técnica (ex: normas ABNT ou documentação de API).

---

### 🔹 **Semana 4 – RAG aplicado ao mundo real**

**Objetivo:** Resolver problemas com base em documentos externos e não treinados.

- **Case Real:**
    - Construa um chatbot que responde sobre produtos ou contratos de uma empresa.
- **Desafio:**
    - Use dados de clientes reais (com permissão), contratos, ou documentação interna.

---

### 🔹 **Semana 5 – Introdução a AI Agents**

**Objetivo:** Criar agentes que interajam com ferramentas e dados para resolver tarefas complexas.

- **Estudo Guiado:**
    - O que são AI Agents? (LangGraph, AutoGen, CrewAI)
    - Como funcionam as "ferramentas" dos agentes.
- **Prática:**
    - Monte um agente que faz perguntas, busca no Google (ou simula), lê PDFs e responde.
- **Desafio:**
    - Agente que lê uma tarefa (ex: “faça um resumo deste relatório e envie por e-mail”) e executa.

---

### 🔹 **Semana 6 – Projeto Final: Aplicação Real**

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