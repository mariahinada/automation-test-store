import { CheckoutService } from "../../services/checkout/checkout-service";
import { CheckoutExpectations } from "../../expectations/checkout/checkout-expectations";
import { RandomDataHelper } from "../../helpers/random-data";

describe("Fluxo de Compra no Automation Test Store", () => {
  const service = new CheckoutService();
  const expect = new CheckoutExpectations();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Adicionar produto simples ao carrinho", () => {
    service.clickLoginOrRegisterBtn();
    service.fillLoginName("usuario");
    service.fillPassword("senha123");
    service.clickContinueBtnToLogin();
    service.clickHomeBtn();
    service.clickSimpleProduct();
    service.clickCartBtn();
    expect.showSimpleProductOnCart();
  });

  it("Adicionar produto com variação ao carrinho", () => {
    service.clickLoginOrRegisterBtn();
    service.fillLoginName("usuario");
    service.fillPassword("senha123");
    service.clickContinueBtnToLogin();
    service.clickHomeBtn();
    service.clickVariationProduct();
    service.selectVariationOption('664');
    service.clickCartBtn();
    expect.showVariationProductOnCart();
  });
});
