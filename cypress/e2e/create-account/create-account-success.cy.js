import { CreateAccountSuccessService } from "../../services/create-account/create-account-success-service";
import { RandomDataHelper } from "../../helpers/randomData";
import { CreateAccountSuccessExpectations } from "../../expectations/create-account/create-account-success-expectations";

describe("Cadastro válido", () => {
  const service = new CreateAccountSuccessService();
  const expect = new CreateAccountSuccessExpectations();

  it("Cadastro com usuário válido", () => {
    // given
    cy.visit("/index.php?rt=account/create");

    // when
    service.clickLoginOrRegister();
    service.clickContinueBtnToRegister();
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
    service.fillPassword("senha123");
    service.fillConfirmPassword("senha123");
    service.subscribeNewsLetter();
    service.acceptprivacyPolicy();
    service.clickContinueBtnToFinish();

    // then
    expect.showSuccessMessage();
  });
});
