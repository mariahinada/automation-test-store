# Automation Test Store - Projeto de Testes E2E

Projeto de automação de testes end-to-end (E2E) para o site Automation Test Store, implementado com Cypress

## Sobre o Projeto

Este projeto realiza testes automatizados no site https://automationteststore.com/, focando nos fluxos de criação de conta com cenários válidos e inválidos.

## Tecnologias Utilizadas

- **Cypress** (v15.2.0)
- **JavaScript**

## Cenários de Teste Implementados

### 1. Cadastro Válido
- **Arquivo:** `create-account-success.cy.js`
- **Descrição:** Testa o fluxo completo de criação de conta com dados válidos
- **Validação:** Confirmação de conta criada com sucesso

### 2. Cadastro com Usuário Inválido
- **Arquivo:** `create-account-invalid-user.cy.js`
- **Descrição:** Testa o fluxo com nome de usuário inválido (menos de 5 caracteres)
- **Validação:** Mensagem de erro apropriada é exibida

## 🛠Padrões de Desenvolvimento

### Service Layer
Classes que encapsulam as interações com a página:
- `AbstractService` - Classe base com métodos genéricos
- `CreateAccountSuccessService` - Serviço para cenários de sucesso
- `CreateAccountInvalidUserService` - Serviço para cenários de erro

### Expectations Layer
Classes para validações e assertions:
- `AbstractExpectation` - Classe base com métodos genéricos
- `CreateAccountSuccessExpectations` - Expectativas para sucesso
- `CreateAccountInvalidUserExpectations` - Expectativas para erro

### Helpers
- `RandomDataHelper` - Geração de dados aleatórios (email e usuário)

## Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 20 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/mariahinada/automation-test-store.git
