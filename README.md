# Automation Test Store - Projeto de Testes E2E

Automação end-to-end para https://automationteststore.com/ usando Cypress e TypeScript. CI configurado via GitHub Actions.

## Resumo do projeto
- Framework: Cypress (com suporte a TypeScript)
- Linguagem: TypeScript
- CI: GitHub Actions (`.github/workflows/cypress.yml`) — comando: `npx cypress run`
- Objetivo: Cobrir fluxos críticos do e‑commerce (cadastro, login, compra, recuperação de credenciais) com camadas de services/expectations.

## Estrutura atual (corrente)
cypress/
- e2e/
  - login/
    - login.cy.ts
  - checkout/
    - checkout.cy.ts
  - create-account/
    - create-account-success.cy.ts
    - create-account-invalid-user.cy.ts
    - create-account-invalid-password.cy.ts
  - forgot-credentials/
    - forgot-credentials.cy.ts
- expectations/
  - abstract-expectations.ts
  - login/
    - login-expectations.ts
  - checkout/
    - checkout-expectations.ts
  - create-account/
    - create-account-success-expectations.ts
    - create-account-invalid-user-expectations.ts
    - create-account-invalid-password-expectations.ts
- fixtures/
  - products.json
  - users.json
  - example.json
- helpers/
  - cart-helper.ts
  - random-data-helper.ts
- services/
  - abstract-service.ts
  - login/
    - login-service.ts
  - checkout/
    - checkout-service.ts
  - create-account/
    - create-account-service.ts
  - forgot-credentials/
    - forgot-credentials-service.ts
- support/
  - commands.ts
  - e2e.ts
docs/
- gherkin/
  - checkout.feature
  - create-account.feature
  - forgot-credentials.feature
  - login.feature
.github/
- workflows/
  - ci.yml

## Cenários implementados (testes)
- Cadastro: sucesso, usuário inválido, senha inválida
- Login: cenários de sucesso e falhas básicas (login.cy.ts)
- Checkout: adicionar (simples/variação), remover, finalizar pedido
- Forgot credentials: fluxo principal em forgot-credentials.cy.ts

## Requisitos para TypeScript no projeto
- tsconfig.json configurado para Cypress (incluir types: ["cypress"])
- dependências dev: typescript e @types/node (e.g., `npm i -D typescript @types/node`)
- garantir que suporte do Cypress para `.ts` está configurado (arquivos de suporte e comandos em .ts)

## Como executar
1. npm install  
2. npx cypress open  (interativo)  
ou  
npx cypress run  (modo headless)

CI: pipeline em `.github/workflows/cypress.yml` executa `npx cypress run` nos pushes/PRs.
