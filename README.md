# NLW Agents Server

Este projeto foi desenvolvido como parte do evento NLW da Rocketseat.

## Descrição

Servidor backend para gerenciamento de salas e agentes, utilizando Node.js, TypeScript e Drizzle ORM. O objetivo é fornecer uma API simples para operações relacionadas a salas.

## Tecnologias e Bibliotecas

- **Node.js**
- **TypeScript**
- **Drizzle ORM** (mapeamento objeto-relacional)
- **Docker** (ambiente de banco de dados)
- **PostgreSQL** (banco de dados relacional)

## Padrões de Projeto

- Estrutura modular por domínio (`src/db`, `src/http/routes`, `src/schema`)
- Separação de responsabilidades (rotas, conexão com banco, schemas)
- Uso de variáveis de ambiente para configuração

## Setup do Projeto

### Pré-requisitos

- Node.js >= 18
- Docker

### Instalação

1. Clone o repositório:
   ```sh
   git clone <repo-url>
   cd nlw-agents-server
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Configure o banco de dados com Docker:
   ```sh
   docker-compose up -d
   ```
4. Configure as variáveis de ambiente em `src/env.ts` conforme necessário.

### Configuração do Banco de Dados

1. Execute as migrações do banco de dados:

   ```sh
   npm run drizzle:push
   ```

2. (Opcional) Execute o seed para dados iniciais:
   ```sh
   npm run seed
   ```

### Executando o servidor

```sh
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm run drizzle:push`: Aplica as migrações no banco de dados
- `npm run seed`: Popula o banco com dados iniciais
- `npm run drizzle:studio`: Abre o Drizzle Studio para visualização do banco de dados

## Observações

- As migrações do banco estão em `src/db/migrations`.
- O seed inicial está em `src/db/seed.ts`.
- As rotas HTTP estão em `src/http/routes`.

---

Projeto criado para fins educacionais no evento NLW da Rocketseat.
