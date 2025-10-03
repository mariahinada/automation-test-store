// navega para a página de login, registro (e recuperação de senha)
Cypress.Commands.add("navigateToLoginAndRegister", () => {
  cy.visit("/");
  cy.get("#customer_menu_top").contains("Login or register").click();
});

// navega para a página de criação de conta
Cypress.Commands.add("navigateToCreateAccount", () => {
  cy.visit("/index.php?rt=account/create")
})
