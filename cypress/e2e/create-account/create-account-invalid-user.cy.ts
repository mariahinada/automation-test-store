import { CreateAccountInvalidUserService } from "../../services/create-account/create-account-invalid-user-service";
import { RandomDataHelper } from "../../helpers/random-data-helper";
import { CreateAccountInvalidUserExpectations } from "../../expectations/create-account/create-account-invalid-user-expectations";

describe("Criação de Conta no Automation Test Store", () => {
  const service = new CreateAccountInvalidUserService();
  const expectation = new CreateAccountInvalidUserExpectations();
  it("Cadastro com usuário inválido", () => {
    // given
    cy.navigateToCreateAccount();

    // when
    service.fillFirstName("Nome");
    service.fillLastName("Sobrenome");
    service.fillEmail(RandomDataHelper.randomEmail());
    service.fillTelephone("0000-0000");
    service.fillFax("123");
    service.fillCompany("Empresa");
    service.fillAddress1("Endereço 1");
    service.fillAddress2("Endereço 2");
    service.fillCity("São Paulo");
    service.selectCountry("Brazil");
    service.selectState("Sao Paulo");
    service.fillZipCode("00000-000");
    service.fillLoginName("usu");
    service.fillPassword("senha123");
    service.fillConfirmPassword("senha123");
    service.subscribeNewsLetter();
    service.acceptprivacyPolicy();
    service.clickContinueBtnToFinish();

    // then
    expectation.showInvalidUserAlert();
  });
});
