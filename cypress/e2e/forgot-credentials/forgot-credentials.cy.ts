import { ForgotCredentialsService } from "../../services/forgot-credentials/forgot-credentials-service";
import { ForgotCredentialsExpectations } from "../../expectations/forgot-credentials/forgot-credentials-expectations";

describe("Recuperação de Credenciais no Automation Test Store", () => {
  const service = new ForgotCredentialsService();
  const expectation = new ForgotCredentialsExpectations();

  beforeEach(() => {
    cy.navigateToLoginAndRegister();
  });

  it("Recuperar senha com sucesso", () => {
    service.clickForgotPasswordBtn();
    service.fillLoginName("usuario");
    service.fillEmail("usuario@exemplo.com");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showSuccessMessageForForgotPassword();
  });

  it("Recuperar senha com usuário inválido", () => {
    service.clickForgotPasswordBtn();
    service.fillLoginName("usu");
    service.fillEmail("usuario@exemplo.com");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showFailureMessage();
  });

  it("Recuperar senha com e-mail inválido", () => {
    service.clickForgotPasswordBtn();
    service.fillLoginName("usuario");
    service.fillEmail("usuario@exemplo");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showFailureMessage();
  });

  it("Recuperar usuário com sucesso", () => {
    service.clickForgotLoginBtn();
    service.fillLastName("Sobrenome");
    service.fillEmail("usuario@exemplo.com");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showSucessMessageForForgotLogin();
  });

  it("Recuperar usuário com sobrenome inválido", () => {
    service.clickForgotLoginBtn();
    service.fillLastName("So");
    service.fillEmail("usuario@exemplo.com");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showFailureMessage();
  });

  it("Recuperar usuário com e-mail inválido", () => {
    service.clickForgotLoginBtn();
    service.fillLastName("Sobrenome");
    service.fillEmail("usuario@exemplo");
    service.clickContinueBtnToSubmitForgotCredentials();
    expectation.showFailureMessage();
  });
});
