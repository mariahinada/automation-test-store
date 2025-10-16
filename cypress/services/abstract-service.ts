/// <reference types="cypress" />

export class AbstractService {
  protected baseSelector: string;

  constructor(baseSelector = "") {
    this.baseSelector = baseSelector;
  }

  visit(path = "") {
    cy.visit(`${Cypress.config("baseUrl")}${path}`);
  }

  click(selector: string) {
    if (!selector) throw new Error("Nenhum seletor informado para click");
    cy.get(selector).click({ force: true });
  }

  type(selector: string, value: string) {
    if (!value)
      throw new Error(
        `Nenhum valor passado para select no elemento: ${selector}`,
      );
    cy.get(selector).type(value);
  }

  clearInput(selector: string) {
    cy.get(selector).clear()
  }

  select(selector: string, option: string) {
    if (!option)
      throw new Error(
        `Nenhum valor passado para o select no elemento: ${selector}`,
      );
    cy.get(selector).should("be.visible").select(option);
  }

  check(selector: string) {
    if (!selector) throw new Error("Nenhum seletor informado para check");
    cy.get(selector).check();
  }

  getText(selector: string) {
    return cy.get(selector).invoke("text");
  }

  clickChildByText(text: string) {
    cy.contains(text).click({ force: true });
  }

  reloadPage() {
    cy.reload();
  }
}
