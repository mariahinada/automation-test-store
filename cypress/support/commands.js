// navega para a página de login, registro (e recuperação de senha)
Cypress.Commands.add("navigateToLoginAndRegister", () => {
  cy.visit("/index.php?rt=account/login");
});

// navega para a página de login
Cypress.Commands.add("navigateToLogin", () => {
  cy.visit("/index.php?rt=account/login");
});

// Faz login com usuário e senha válida
const VALID_USERNAME = "usuario";
const VALID_PASSWORD = "senha123";

Cypress.Commands.add("loginAndHomeAccess", () => {
  cy.get("#loginFrm_loginname").type(VALID_USERNAME);
  cy.get("#loginFrm_password").type(VALID_PASSWORD);
  cy.get("#loginFrm > fieldset > button").click();
  cy.get(":nth-child(1) > .active").click();
});

// navega para a página de criação de conta
Cypress.Commands.add("navigateToCreateAccount", () => {
  cy.visit("/index.php?rt=account/create");
});
