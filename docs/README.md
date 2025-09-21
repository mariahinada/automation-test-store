# Automation Test Store - Projeto de Testes E2E

Projeto de automação de testes end-to-end (E2E) para o site Automation Test Store, implementado com Cypress

## Sobre o Projeto

Este projeto realiza testes automatizados no site https://automationteststore.com/, focando nos fluxos de criação de conta e compra, cobrindo cenários válidos e inválidos.

## Tecnologias Utilizadas

- **Cypress** (v15.2.0)
- **JavaScript**

## Estrutura do Projeto

```
cypress/
  e2e/
    checkout/
      checkout.cy.js
    create-account/
      create-account-success.cy.js
      create-account-invalid-user.cy.js
      create-account-invalid-password.cy.js
  expectations/
    abstract-expectations.js
    checkout/
      checkout-expectations.js
    create-account/
      create-account-success-expectations.js
      create-account-invalid-user-expectations.js
      create-account-invalid-password-expectations.js
  fixtures/
    example.json
  helpers/
    cart-helper.js
    random-data-helper.js
  services/
    abstract-service.js
    checkout/
      checkout-service.js
    create-account/
      create-account-success-service.js
      create-account-invalid-user-service.js
      create-account-invalid-password.service.js
  support/
    commands.js
    e2e.js
docs/
  README.md
  gherkin/
    checkout.feature
    create-account.feature
```

## Cenários de Teste Implementados

### 1. Cadastro Válido
- **Arquivo:** `create-account-success.cy.js`
- **Descrição:** Testa o fluxo completo de criação de conta com dados válidos
- **Validação:** Confirmação de conta criada com sucesso

### 2. Cadastro com Usuário Inválido
- **Arquivo:** `create-account-invalid-user.cy.js`
- **Descrição:** Testa o fluxo com nome de usuário inválido (menos de 5 caracteres)
- **Validação:** Mensagem de erro apropriada é exibida

### 3. Cadastro com Senha Inválida
- **Arquivo:** `create-account-invalid-password.cy.js`
- **Descrição:** Testa o fluxo com senha inválida (menos de 4 caracteres)
- **Validação:** Mensagem de erro apropriada é exibida

### 4. Fluxo de Compra (Checkout)
- **Arquivo:** `checkout.cy.js`
- **Descrição:** Testa os principais fluxos de compra, incluindo:
  - Adição de produto simples ao carrinho
  - Adição de produto com variação ao carrinho
  - Remoção de produto do carrinho
  - Finalização de compra com sucesso
- **Validação:** Mensagens de sucesso e estados do carrinho

## Padrões de Desenvolvimento

### Service Layer
Classes que encapsulam as interações com a página:
- [`AbstractService`](cypress/services/abstract-service.js) - Classe base com métodos genéricos
- [`CreateAccountSuccessService`](cypress/services/create-account/create-account-success-service.js) - Serviço para cenários de sucesso
- [`CreateAccountInvalidUserService`](cypress/services/create-account/create-account-invalid-user-service.js) - Serviço para cenários de erro de usuário
- [`CreateAccountInvalidPasswordService`](cypress/services/create-account/create-account-invalid-password.service.js) - Serviço para cenários de erro de senha
- [`CheckoutService`](cypress/services/checkout/checkout-service.js) - Serviço para fluxo de compra

### Expectations Layer
Classes para validações e assertions:
- [`AbstractExpectation`](cypress/expectations/abstract-expectations.js) - Classe base com métodos genéricos
- [`CreateAccountSuccessExpectations`](cypress/expectations/create-account/create-account-success-expectations.js) - Expectativas para sucesso
- [`CreateAccountInvalidUserExpectations`](cypress/expectations/create-account/create-account-invalid-user-expectations.js) - Expectativas para erro de usuário
- [`CreateAccountInvalidPasswordExpectations`](cypress/expectations/create-account/create-account-invalid-password-expectations.js) - Expectativas para erro de senha
- [`CheckoutExpectations`](cypress/expectations/checkout/checkout-expectations.js) - Expectativas para fluxo de compra

### Helpers
- [`RandomDataHelper`](cypress/helpers/random-data-helper.js) - Geração de dados aleatórios (email e usuário)
- [`CartHelper`](cypress/helpers/cart-helper.js) - Limpeza de carrinho após testes

### Fixtures
- [`example.json`](cypress/fixtures/example.json) - Exemplo de dados mockados para testes

### Gherkin Features
- [`create-account.feature`](docs/gherkin/create-account.feature) - Especificação dos cenários de cadastro
- [`checkout.feature`](docs/gherkin/checkout.feature) - Especificação dos cenários de compra

## Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/mariahinada/automation-test-store.git
```
2. Instale as dependências:
```bash
npm install
```

3. Execute os testes:
```bash
npx cypress open
```
ou
```bash
npx cypress run
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias e novos cenários de teste.