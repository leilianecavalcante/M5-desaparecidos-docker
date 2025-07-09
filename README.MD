# Crianças Desaparecidas - Landing Page - Com Docker

## 🗂️ Descrição do Projeto

Este projeto é uma landing page dedicada à conscientização sobre crianças desaparecidas, desenvolvido como parte do Módulo 5 do curso de Desenvolvimento Fullstack.
A aplicação foi construída para consumir a API utilitária desenvolvida no Mini Projeto do Módulo 4 (M4).

📝 Observação:
A API criada no projeto M4 já está integrada neste repositório, junto com o frontend.
Caso deseje utilizar apenas a API isoladamente, acesse o repositório dedicado:

🔗 https://github.com/leilianecavalcante/Projeto-M4-API.git


### Objetivo principal desse projeto✅ 
O principal objetivo é apresentar informações cruciais sobre casos de desaparecimento de forma clara, acessível e visualmente impactante, facilitando o engajamento do público com a causa.

Todo o ambiente de desenvolvimento e produção é orquestrado com **Docker** e **Docker Compose**, garantindo consistência e facilidade na execução do projeto em qualquer máquina.



## ✨ Principais Funcionalidades 
- Consome **3+ rotas GET** da API utilitária criada para crianças desaparecidas

- Cada rota é apresentada em uma **seção diferente** na Landing Page.

- Navegação por **scroll suave** entre as seções.

- Estrutura 100% **componentizada**, garantindo código limpo, identado e sem erros.

- Estilização com **TailwindCSS**, com detalhes personalizados via CSS Modules se necessário.

- Layout **responsivo**, agradável e otimizado para dispositivos móveis.

- Ícones, imagens e fontes personalizadas para melhorar a experiência do usuário.
- Animações e efeitos de hover, focus e transições com **Framer Motion**.

---

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia    | Versão Estimada |
|---------------|-----------------|
| Next.js       | 15+             |
| React         | 18+             |
| TypeScript    | 5+              |
| TailwindCSS   | 3+              |
| Framer Motion | 11+             |
| Docker Engine | 24+             |
| Docker Compose| 2+              |

---

## 🚀 Rodando o Projeto com Docker

Para executar este projeto em sua máquina local ou em outro ambiente, a maneira mais fácil e recomendada é usando Docker e Docker Compose.

### Pré-requisitos

Antes de começar, certifique-se de que você tem os seguintes softwares instalados:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/) (geralmente já vem incluído com o Docker Desktop)

## ⚙️ Instalação e Execução

Siga os passos abaixo para colocar a aplicação no ar.

## Clonando o Repositório
**1. Clone o Repositório**

Primeiro, clone este repositório para a sua máquina local:
```bash
git clone https://github.com/leilianecavalcante/M5-desaparecidos-docker.git
```

**2. Variáveis de Ambiente (Opcional)**

Este projeto está configurado para funcionar sem a necessidade de arquivos `.env` quando executado com Docker Compose, pois a comunicação entre os contêineres é gerenciada internamente.

No entanto, se você precisar adicionar chaves de API ou outras configurações sensíveis no futuro, você pode criar os seguintes arquivos:
- `desaparecidos-api/.env` para a API.
- `my-app/.env.local` para o frontend.


## Construindo e Iniciando os Contêineres 

### Entre no diretório com o seguinte comando no seu terminal

```bash
cd desaparecidos-landing
```


**3. Construa e Inicie os Contêineres**

Na raiz do projeto (onde o arquivo `docker-compose.yml` está localizado), execute o seguinte comando:

```bash
docker-compose up --build
```

- O comando `docker-compose up` irá construir as imagens Docker para a API e para o frontend (se ainda não existirem) e iniciar os contêineres.
- A flag `--build` força a reconstrução das imagens, o que é útil se você fez alterações nos `Dockerfile` ou no código-fonte.

O processo pode levar alguns minutos na primeira vez, pois o Docker precisa baixar as imagens base e instalar todas as dependências.

## 🖥️ Acessando a Aplicação

Após a conclusão do comando, a aplicação estará disponível nos seguintes endereços:

- **Frontend (Next.js):** http://localhost:3001
- **API (Node.js):** http://localhost:3002

Você pode acessar a landing page abrindo seu navegador e visitando `http://localhost:3001`.

### ⏹️ Parando a Aplicação

Para parar os contêineres, pressione `Ctrl + C` no terminal onde o `docker-compose up` está rodando.

Para parar e remover os contêineres (liberando as portas e redes), execute o seguinte comando no mesmo diretório:
```bash
docker-compose down
```

## COmo Rodar Sem o Docker?

Mesmo com o Docker, o seu projeto continua podendo ser executado manualmente em dois terminais separados, desde que você tenha as dependências instaladas localmente.

✅ Como funciona rodar manualmente?

## 1️⃣ API (backend)

### Na pasta da API Rode em seu Terminal
```bash
cd desaparecidos-api
npm install
npm src/server.js
```
Sua API ficará rodando em: http://localhost:3002

## 2️⃣ Frontend (Next.js)


### Na pasta do frontend
```bash
cd my-app
npm install
npm run dev
```
Sua aplicação Next.js ficará em: http://localhost:3000 (ou 3001, depende da sua config)

## ⚙️ ATENÇÃO:

Quando rodar sem Docker, ajuste o .env.local do frontend para usar a URL correta da API:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3002
```
