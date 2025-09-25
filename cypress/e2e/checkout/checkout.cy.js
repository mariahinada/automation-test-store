import { CheckoutService } from "../../services/checkout/checkout-service";
import { CheckoutExpectations } from "../../expectations/checkout/checkout-expectations";
import { CartHelper } from "../../helpers/cart-helper";
import products from "../../fixtures/products.json";

describe("Fluxo de Compra no Automation Test Store", () => {
  const service = new CheckoutService();
  const expectation = new CheckoutExpectations();

  beforeEach(() => {
    cy.visit("/");
    service.clickLoginOrRegisterBtn();
    service.fillLoginName("usuario");
    service.fillPassword("senha123");
    service.clickContinueBtnToLogin();
    service.clickHomeBtn();
  });

  it("Adicionar produto simples ao carrinho", () => {
    service.clickSimpleProduct(products.simpleProduct);
    service.clickCartBtn();
    expectation.showSimpleProductOnCart(products.simpleProduct);
  });

  it("Adicionar produto com variação ao carrinho", () => {
    service.clickVariationProduct(products.variationProduct);
    service.selectVariationOption("664");
    service.clickCartBtn();
    expectation.showVariationProductOnCart(products.variationProduct);
  });

  it("Finalizar compra com sucesso", () => {
    service.clickVariationProduct(products.variationProduct);
    service.selectVariationOption("664");
    service.clickCartBtn();
    expectation.showVariationProductOnCart(products.variationProduct);
    service.clickConfirmOrderBtn();
    service.clickCheckoutBtn();
    expectation.showOrderProcessed();
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
