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
