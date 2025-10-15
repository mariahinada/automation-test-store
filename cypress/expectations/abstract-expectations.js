export class AbstractExpectation {
  expectElementToBeVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  expectElementToExist(selector) {
    cy.get(selector).should("exist")
  }

  expectElementToNotExist(selector) {
    cy.get(selector).should("not.exist")
  }

  expectElementToHaveText(selector, text) {
    cy.get(selector).should("contain.text", text);
  }

  expectElementToHaveValue(selector, value) {
    cy.get(selector).should("have.value", value)
  }

  expectUrlToBe(url) {
    cy.url().should("eq", url);
  }

  expectElementToHaveClass(selector, className) {
    cy.get(selector).should("have.class", className);
  }

  expectElementByText(elementType, text) {
    cy.contains(elementType, text).should("exist");
  }
}
