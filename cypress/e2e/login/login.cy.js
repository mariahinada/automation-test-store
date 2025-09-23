// cypress/e2e/login/login.cy.js
import { LoginService } from "../../services/login/login-service";
import { LoginExpectations } from "../../expectations/login/login-expectations";
import users from "../../fixtures/users.json";

describe("Fluxo de Login no Automation Test Store", () => {
  const service = new LoginService();
  const expect = new LoginExpectations();

  beforeEach(() => {
    cy.visit("/");
    service.clickLoginOrRegisterBtn();
  });

  it("Login com sucesso", () => {
    service.fillLoginName(users.validUser.login);
    service.fillPassword(users.validUser.password);
    service.clickContinueBtnToLogin();
    expect.showUserLoggedIn(users.validUser.login);
  });

  it("Login com usuário inválido", () => {
    service.fillLoginName(users.invalidUser.login);
    service.fillPassword(users.invalidUser.password);
    service.clickContinueBtnToLogin();
    expect.showInvalidLoginOrPassword();
  });

  it("Login com senha inválida", () => {
    service.fillLoginName(users.validUser.login);
    service.fillPassword(users.invalidPassword.password);
    service.clickContinueBtnToLogin();
    expect.showInvalidLoginOrPassword();
  });
});
