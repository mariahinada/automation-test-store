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

  it("Adicionar produto com variação ao carrinho", () => {
    service.clickVariationProduct();
    service.selectVariationOption("664");
    service.clickCartBtn();
    expect.showVariationProductOnCart();
  });

  it.only("Finalizar compra com sucesso", () => {
    service.clickVariationProduct();
    service.selectVariationOption("664");
    service.clickCartBtn();
    expect.showVariationProductOnCart();
    service.clickConfirmOrderBtn();
    service.clickcheckoutBtn();
    expect.showOrderProcessed();
  });

  afterEach(function () {
    const clearTest = [
      "Adicionar produto simples ao carrinho",
      "Adicionar produto com variação ao carrinho",
    ];

    if (clearTest.includes(this.currentTest.title)) {
      CartHelper.clearCart();
      cy.log("Carrinho limpo");
    } else {
      cy.log("Não requer limpeza");
    }
  });
});
