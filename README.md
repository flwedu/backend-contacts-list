# backend-contacts-list

## Informações iniciais

Essa é uma REST API que será consumida pelo `contact-list`. Tecnologias utilizadas:

- Node.js
- Typescript
- Prisma ORM
- Express

A aplicação foi criada com o intuito de aplicar meus estudos em TDD, DDD, Clean Architecture, Typescript e Node.js.

## Executando a aplicação

Primeiramente é necessário instalar as dependências do projeto:

```bash
yarn install
```

Depois é necessário rodar uma migration do prisma para criar um banco de dados `SQLite`:

```bash
yarn prisma migrate dev --name start
```

O arquivo SQLite será criado no local indicado pelo `DATABASE_URL` no arquivo `.env`.

Após rodar a migration, o servidor está pronto para ser executado

```bash
yarn start
```

## Rodando testes unitários

Para executar os testes unitários:

```bash
yarn test
```

Ou ainda:

```bash
yarn test:watch
```
