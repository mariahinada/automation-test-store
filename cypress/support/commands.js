// navega para a página de login, registro (e recuperação de senha)
Cypress.Commands.add("navigateToLoginAndRegister", () => {
  cy.visit("/index.php?rt=account/login");
});

// navega para a página de criação de conta
Cypress.Commands.add("navigateToCreateAccount", () => {
  cy.visit("/index.php?rt=account/create")
})
