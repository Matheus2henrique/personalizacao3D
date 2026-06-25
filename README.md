# 🖨️ Sistema de Pedidos para Gráfica (MVP)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![FastAPI](https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google_Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)

Uma plataforma web de e-commerce e personalização de produtos desenvolvida para otimizar o fluxo de pedidos de uma gráfica. Este projeto adota uma arquitetura leve (MVP), utilizando **Google Sheets** como banco de dados principal para facilitar o gerenciamento de pedidos por parte do cliente, sem a necessidade de painéis administrativos complexos.

## 🚀 Funcionalidades

* **Interface de Personalização:** Front-end responsivo onde o usuário pode escolher características do produto (tamanho, cor, modelo).
* **Upload de Artes:** Sistema para o cliente enviar a imagem/estampa que deseja imprimir.
* **Processamento Rápido:** Back-end assíncrono de alta performance para lidar com os pedidos.
* **Integração com Planilhas:** Os pedidos realizados no site são inseridos automaticamente e em tempo real em uma planilha do Google Sheets.
* **Gestão Simplificada:** O dono da gráfica acompanha e gerencia o status dos pedidos diretamente pelo Google Drive.

## 🛠️ Tecnologias Utilizadas

### Front-end
* **Vite + React (JavaScript):** Construção da interface do usuário de forma modular e rápida.
* **Tailwind CSS:** Estilização utilitária para garantir um design moderno e responsivo.
* **Axios / Fetch API:** Comunicação HTTP com o back-end.

### Back-end
* **FastAPI (Python):** Criação ágil da API REST com documentação automática (Swagger).
* **Uvicorn:** Servidor ASGI para rodar a aplicação Python.
* **Gspread & Google OAuth:** Integração e autenticação com a API do Google Sheets.

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter as seguintes ferramentas instaladas na sua máquina:
* [Node.js](https://nodejs.org/) (v18 ou superior)
* [Python](https://www.python.org/) (v3.9 ou superior)
* Uma conta no [Google Cloud Console](https://console.cloud.google.com/) para gerar as credenciais do Google Sheets (Service Account).

---

## 💻 Instalação e Configuração

O projeto está dividido em duas pastas principais: `/frontend` e `/backend`. Você precisará rodar ambas as aplicações simultaneamente.

### 1. Configurando o Back-end (FastAPI)

Abra o terminal, navegue até a pasta do backend e crie um ambiente virtual (os comandos abaixo consideram terminais baseados em Unix, como o Ubuntu):

```bash
cd backend

# Criação do ambiente virtual
python3 -m venv venv

# Ativação do ambiente virtual
source venv/bin/activate

# Instalação das dependências
pip install -r requirements.txt