import { CheckoutService } from "../../services/checkout/checkout-service";
import { CheckoutExpectations } from "../../expectations/checkout/checkout-expectations";
import { CartHelper } from "../../helpers/cart-helper";

describe("Fluxo de Compra no Automation Test Store", () => {
  const service = new CheckoutService();
  const expect = new CheckoutExpectations();

  beforeEach(() => {
    cy.visit("/");
    service.clickLoginOrRegisterBtn();
    service.fillLoginName("usuario");
    service.fillPassword("senha123");
    service.clickContinueBtnToLogin();
    service.clickHomeBtn();
  });

  it("Adicionar produto simples ao carrinho", () => {
    service.clickSimpleProduct();
    service.clickCartBtn();
    expect.showSimpleProductOnCart();
  });

  afterEach(() => {
    CartHelper.clearCart();
    cy.log("Carrinho limpo");
  });

  it("Adicionar produto com variação ao carrinho", () => {
    service.clickVariationProduct();
    service.selectVariationOption("664");
    service.clickCartBtn();
    expect.showVariationProductOnCart();
  });
});
