# 🚀 GitLab CI Pipeline Manager

Sistema de simulação de pipelines CI/CD inspirado no GitLab, com foco em automação, observabilidade e métricas de execução.

---

## 🧠 Visão Geral

O **GitLab CI Pipeline Manager** é uma aplicação full stack que simula um ambiente real de CI/CD.

Ele permite executar pipelines automatizados com etapas de build, teste e deploy, além de fornecer:

- Logs detalhados de execução
- Histórico de pipelines
- Métricas de sucesso e falha
- Dashboard interativo em tempo real

O projeto foi desenvolvido com foco em **DevOps, automação e observabilidade de sistemas**.

---

## 🏗️ Arquitetura do Sistema

```text
Frontend (React Dashboard)
        ↓
API (FastAPI - Python)
        ↓
Pipeline Engine (Simulação CI/CD)
        ↓
Estado em memória (logs, histórico e métricas)
```
---

## ⚙️ Funcionalidades

### 🚀 Execução de Pipelines
Simulação de pipeline CI/CD com etapas:
- Build
- Test
- Deploy
- Possibilidade de falhas simuladas para cenários reais

### 📜 Histórico de Execuções
- Lista de todos os pipelines executados
- Status: sucesso ou falha
- Timestamp de execução

### 📊 Métricas de Sistema
- Total de builds executados
- Quantidade de sucessos
- Quantidade de falhas
- Taxa de sucesso (%)

### 🧾 Logs em Tempo Real
- Logs detalhados por etapa
- Visualização estilo terminal

---

## 💻 Tecnologias Utilizadas

### Backend
- Python
- FastAPI
- Uvicorn
- Middleware CORS

### Frontend
- React
- JavaScript (ES6+)
- Axios
- CSS customizado

### DevOps (simulado)
- GitLab CI/CD (pipeline demonstrativo)

---

## 🚀 Como Executar o Projeto

### 🔧 Backend

```bash
cd backend
pip install fastapi uvicorn
python -m uvicorn app:app --reload
```
Servidor rodando em:
```bash
http://localhost:8000
```
### 💻 Frontend

```bash
cd frontend
npm install
npm start
```
Aplicação disponível em:
```bash
http://localhost:3000
```
---

## 🔗 Endpoints da API

### ▶️ Executar Pipeline
```bash
GET /history
```
### 📜 Histórico
```bash
GET /history
```
### 📊 Métricas
```bash
GET /metrics
```
---

## 📊 Exemplo de Métricas

```bash
{
  "total": 10,
  "success": 8,
  "failed": 2,
  "success_rate": 80.0
}
```
---

## 🎯 Objetivo do Projeto
Este projeto foi desenvolvido com foco em:
- Simulação de pipelines CI/CD reais
- Conceitos de DevOps e automação
- Integração frontend + backend
- Observabilidade básica de sistemas
- Preparação para ambientes de produção

---

## 📌 CI/CD (GitLab)
O projeto inclui um arquivo .gitlab-ci.yml demonstrativo com etapas:
- build
- test
- deploy
Simulando um fluxo padrão de integração contínua.

---

## 👨‍💻 Autor
Desenvolvido por João Pedro Silva

---

## ⭐ Destaques
- Dashboard estilo DevOps
- Simulação realista de pipelines
- Métricas automáticas
- Logs detalhados
- Arquitetura full stack simples e escalável
