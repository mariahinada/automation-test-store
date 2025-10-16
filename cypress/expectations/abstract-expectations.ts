/// <reference types="cypress" />

export class AbstractExpectation {
  protected baseSelector: string;
  
  constructor(baseSelector = "") {
    this.baseSelector = baseSelector;
  }
  
  expectElementToBeVisible(selector: string) {
    cy.get(selector).should("be.visible");
  }

  expectElementToExist(selector: string) {
    cy.get(selector).should("exist")
  }

  expectElementToNotExist(selector: string) {
    cy.get(selector).should("not.exist")
  }

  expectElementToHaveText(selector: string, text: string) {
    cy.get(selector).should("contain.text", text);
  }

  expectElementToHaveValue(selector: string, value: string) {
    cy.get(selector).should("have.value", value)
  }

  expectUrlToBe(url: string) {
    cy.url().should("eq", url);
  }

  expectElementToHaveClass(selector: string, className: string) {
    cy.get(selector).should("have.class", className);
  }

  expectElementByText(elementType: string, text: string) {
    cy.contains(elementType, text).should("exist");
  }
}
