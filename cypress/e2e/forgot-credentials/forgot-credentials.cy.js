import { ForgotCredentialsService } from '../../services/forgot-credentials/forgot-credentials-service';
import { ForgotCredentialsExpectations } from '../../expectations/forgot-credentials/forgot-credentials-expectations';

describe('Recuperação de Credenciais no Automation Test Store', () => {
    const service = new ForgotCredentialsService();
    const expectation = new ForgotCredentialsExpectations();

    beforeEach(() => {
        cy.visit("/");
        service.clickLoginOrRegisterBtn();
    });

    it("Recuperar senha com sucesso", () => {
        service.clickForgotPasswordBtn();
        service.fillLoginName("usuario");
        service.fillEmail("usuario@exemplo.com");
        service.clickContinueBtnToSubmitForgotCredentials();
        expectation.showSuccessMessageForForgotPassword();
    });

    it.only("Recuperar senha com usuário inválido", () => {
        service.clickForgotPasswordBtn();
        service.fillLoginName("usu");
        service.fillEmail("usuario@exemplo.com");
        service.clickContinueBtnToSubmitForgotCredentials();
        expectation.showFailureMessage();
    })


})