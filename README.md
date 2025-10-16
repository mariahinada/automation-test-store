# Automation Test Store - Projeto de Testes E2E

Projeto de automação de testes end-to-end (E2E) para o site Automation Test Store, implementado com Cypress.

## Sobre o Projeto

Este projeto realiza testes automatizados no site [Automation Test Store](https://automationteststore.com/), cobrindo fluxos de criação de conta, login, compra e recuperação de credenciais, com cenários positivos e negativos.

## Tecnologias Utilizadas

- **Cypress** (v15.2.0)
- **TypeScript**
- **GitHub Actions** (CI/CD)

## Estrutura do Projeto

```
cypress/
  e2e/
    login/
      login.cy.ts
    checkout/
      checkout.cy.ts
    create-account/
      create-account-success.cy.ts
      create-account-invalid-user.cy.ts
      create-account-invalid-password.cy.ts
    forgot-credentials/
      forgot-credentials.cy.ts
  expectations/
    abstract-expectations.ts
    login/
      login-expectations.ts
    checkout/
      checkout-expectations.ts
    create-account/
      create-account-success-expectations.ts
      create-account-invalid-user-expectations.ts
      create-account-invalid-password-expectations.ts
  fixtures/
    products.tson
    users.tson
  helpers/
    random-data-helper.ts
  services/
    abstract-service.ts
    login/
      login-service.ts
    checkout/
      checkout-service.ts
    create-account/
      create-account-success-service.ts
      create-account-invalid-user-service.ts
      create-account-invalid-password.service.ts
    forgot-credentials/
      forgot-credentials-service.ts
  support/
    commands.ts
    e2e.ts
docs/
  README.md
  gherkin/
    checkout.feature
    create-account.feature
    forgot-credentials.feature
    login.feature
.github/
  workflows/
    cypress.yml
```

## Cenários de Teste Implementados

### 1. Cadastro Válido

- **Arquivo:** `create-account-success.cy.ts`
- **Descrição:** Testa o fluxo completo de criação de conta com dados válidos.
- **Validação:** Confirmação de conta criada com sucesso.

### 2. Cadastro com Usuário Inválido

- **Arquivo:** `create-account-invalid-user.cy.ts`
- **Descrição:** Testa o fluxo com nome de usuário inválido (menos de 5 caracteres).
- **Validação:** Mensagem de erro apropriada é exibida.

### 3. Cadastro com Senha Inválida

- **Arquivo:** `create-account-invalid-password.cy.ts`
- **Descrição:** Testa o fluxo com senha inválida (menos de 4 caracteres).
- **Validação:** Mensagem de erro apropriada é exibida.

### 4. Login

- **Arquivo:** `login.cy.ts`
- **Descrição:** Testa o fluxo de login com credenciais válidas e inválidas.
- **Validação:** Mensagens de sucesso e erro apropriadas.

### 5. Fluxo de Compra (Checkout)

- **Arquivo:** `checkout.cy.ts`
- **Descrição:** Testa os principais fluxos de compra, incluindo:
  - Adição de produto simples ao carrinho
  - Adição de produto com variação ao carrinho
  - Remoção de produto do carrinho
  - Finalização de compra com sucesso
- **Validação:** Mensagens de sucesso e estados do carrinho.

### 6. Recuperação de Credenciais (Forgot Credentials)

- **Arquivo:** `forgot-credentials.cy.ts`
- **Descrição:** Testa o fluxo de recuperação de senha, incluindo:
  - Recuperação bem-sucedida com e-mail válido
  - Tentativa com e-mail inválido
  - Tentativa com usuário inexistente
- **Validação:** Mensagens de sucesso e erro apropriadas.

## Padrões de Desenvolvimento

### Service Layer

Classes que encapsulam as interações com a página:

- `AbstractService` - Classe base com métodos genéricos
- Serviços específicos para cada fluxo (cadastro, login, checkout, recuperação de credenciais)

### Expectations Layer

Classes para validações e assertions:

- `AbstractExpectation` - Classe base com métodos genéricos
- Expectations específicas para cada fluxo implementado

### Helpers

- `RandomDataHelper` - Geração de dados aleatórios (email e usuário)
- `CartHelper` - Limpeza de carrinho após testes

### Fixtures

- `products.tson`, `users.tson`, `example.tson` - Dados mockados para testes

### Gherkin Features

- Especificação dos cenários em `.feature` para rastreabilidade e documentação

## Integração Contínua (CI/CD)

- **Ferramenta:** GitHub Actions
- **Arquivo de workflow:** `.github/workflows/ci.yml`
- **Comando executado:** `npx cypress run`
- Os testes são executados automaticamente a cada push ou pull request.

## Configuração do Ambiente

### Pré-requisitos

- Node.ts (versão 20 ou superior)
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

3. Execute os testes localmente:

```bash
npx cypress open
```

ou

```bash
npx cypress run
```

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests para melhorias e novos cenários de teste.
