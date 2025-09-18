export class AbstractExpectation {
  expectElementToBeVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  expectElementToHaveText(selector, text) {
    cy.get(selector).should("contain.text", text);
  }

  expectUrlToBe(url) {
    cy.url().should("eq", url);
  }

  expectElementToHaveClass(selector, className) {
    cy.get(selector).should("have.class", className);
  }

  expectElementByText(elementType, text) {
    cy.contains(elementType, text).should("exist")
  }
}
