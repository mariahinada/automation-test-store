import { CreateAccountService } from "../../services/create-account/create-account-service";
import { RandomDataHelper } from "../../helpers/random-data-helper";
import { CreateAccountInvalidPasswordExpectations } from "../../expectations/create-account/create-account-expectations";

describe("Criação de Conta no Automation Test Store", () => {
  const service = new CreateAccountService();
  const expectation = new CreateAccountInvalidPasswordExpectations();

  it("Cadastro com senha inválida", () => {
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
    service.fillLoginName(RandomDataHelper.randomLogin());
    service.fillPassword("sen");
    service.fillConfirmPassword("sen");
    service.subscribeNewsLetter();
    service.acceptprivacyPolicy();
    service.clickContinueBtnToFinish();

    // then
    expectation.showInvalidPasswordAlert();
  });
});
