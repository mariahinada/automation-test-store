import { CheckoutService } from "../../services/checkout/checkout-service";
import { CheckoutExpectations } from "../../expectations/checkout/checkout-expectations";
import products from "../../fixtures/products.json";

describe("Fluxo de Compra no Automation Test Store", () => {
  const service = new CheckoutService();
  const expectation = new CheckoutExpectations();

  beforeEach(() => {
    cy.loginAndNavigateToHome();
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

  it.only("Finalizar compra com sucesso", () => {
    service.clickVariationProduct(products.variationProduct);
    service.selectVariationOption("664");
    service.clickCartBtn();
    expectation.showVariationProductOnCart(products.variationProduct);
    service.clickConfirmOrderBtn();
    service.clickCheckoutBtn();
    expectation.showOrderProcessed();
  });

  afterEach(() => {
    cy.clearCart();
  });
});
