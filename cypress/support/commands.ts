const VALID_USERNAME = "usuario";
const VALID_PASSWORD = "senha123";

// navega para a página de login
Cypress.Commands.add("navigateToLoginAndRegister", () => {
  cy.visit("/index.php?rt=account/login");
});

// faz login e navega para a home
Cypress.Commands.add("loginAndNavigateToHome", () => {
  cy.visit("/index.php?rt=account/login");
  cy.wait(500); //

  cy.get('input[name="loginname"]').should("be.visible").type(VALID_USERNAME);
  cy.get('input[name="password"]').should("be.visible").type(VALID_PASSWORD);
  cy.get("#loginFrm > fieldset > button").click();

  cy.get(":nth-child(1) > .active").should("be.visible").click();
  cy.url().should("not.include", "account/login");
});

// limpa o carrinho de compras
Cypress.Commands.add("clearCart", () => {
  cy.visit("/index.php?rt=checkout/cart");

  cy.get("body").then(($body) => {
    if ($body.find(":nth-child(7) > .btn").length) {
      cy.get(":nth-child(7) > .btn").click({ multiple: true });
    } else {
      cy.get(".contentpanel").should(
        "contain.text",
        "Your shopping cart is empty",
      );
      cy.log("Carrinho limpo");
    }
  });
});

// navega para a página de criação de conta
Cypress.Commands.add("navigateToCreateAccount", () => {
  cy.visit("/index.php?rt=account/create");
});
