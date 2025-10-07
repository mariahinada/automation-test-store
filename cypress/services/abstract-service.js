export class AbstractService {
  constructor(baseSelector = "") {
    this.baseSelector = baseSelector;
  }

  visit(path = "") {
    cy.visit(`${Cypress.config("baseUrl")}${path}`);
  }

  click(selector) {
    if (!selector) throw new Error("Nenhum seletor informado para click");
    cy.get(selector).click({ force: true });
  }

  type(selector, value) {
    if (!value)
      throw new Error(
        `Nenhum valor passado para select no elemento: ${selector}`,
      );
    cy.get(selector).type(value);
  }

  select(selector, option) {
    if (!option)
      throw new Error(
        `Nenhum valor passado para o select no elemento: ${selector}`,
      );
    cy.get(selector).should("be.visible").select(option);
  }

  check(selector) {
    if (!selector) throw new Error("Nenhum seletor informado para check");
    cy.get(selector).check();
  }

  getText(selector) {
    return cy.get(selector).invoke("text");
  }

  clickChildByText(text) {
    cy.contains(text).click({ force: true });
  }
}
