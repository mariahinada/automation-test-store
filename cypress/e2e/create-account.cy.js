import { CreateAccountElements } from "../elements/create-account-elements";
import { CreateAccountService } from "../services/create-account-service";
import { RandomDataHelper } from "../helpers/randomData";

describe("Criação de Conta no Automation Test Store", () => {
  const service = new CreateAccountService()

  it("Criando Conta c/ Sucesso", () => {
    // given
    cy.visit("https://automationteststore.com/")

    // when
    service.clickLoginOrRegister()
    service.clickContinueBtnToRegister()
    service.fillFirstName("Nome")
    service.fillLastName("Sobrenome")
    service.fillEmail(RandomDataHelper.randomEmail())
    service.fillTelephone("0000-0000")
    service.fillFax("123")
    service.fillCompany("Empresa")
    service.fillAddress1("Endereço 1")
    service.fillAddress2("Endereço 2")
    service.fillCity("Sao Paulo")
    service.selectCountry("Brazil")
    service.selectState("Sao Paulo")
    service.fillZipCode("00000-000")
    service.fillLoginName(RandomDataHelper.randomLogin())
    service.fillPassword("senha123")
    service.fillConfirmPassword("senha123")
    service.subscribeNewsLetter()
    service.acceptPrivacyPolicy()
    service.clickContinueBtnToFinish()

    // then
    cy.get(CreateAccountElements.successMessage)
    .should("contain.text", "Your Account Has Been Created!")
  })
})
