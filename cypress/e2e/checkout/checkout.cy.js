import { CheckoutService } from "../../services/checkout/checkout-service";
import { CheckoutExpectations } from "../../expectations/checkout/checkout-expectations";
import { CartHelper } from "../../helpers/cart-helper";

describe("Fluxo de Compra no Automation Test Store", () => {
  const service = new CheckoutService();
  const expect = new CheckoutExpectations();
  let products; // variável para armazenar os dados dos produtos

  before(() => { // carrega fixture antes de todos os testes
    cy.fixture("products").then((data) => {
      products = data; // atribui os dados do fixture à variável products
    });
  })

  beforeEach(() => {
    cy.visit("/");
    service.clickLoginOrRegisterBtn();
    service.fillLoginName("usuario");
    service.fillPassword("senha123");
    service.clickContinueBtnToLogin();
    service.clickHomeBtn();
  });

  it.only("Adicionar produto simples ao carrinho", () => {
    service.clickSimpleProduct(products.simpleProduct);
    service.clickCartBtn();
    expect.showSimpleProductOnCart(products.simpleProduct);
  });

  it("Adicionar produto com variação ao carrinho", () => {
    service.clickVariationProduct(products.variationProduct);
    service.selectVariationOption("664");
    service.clickCartBtn();
    expect.showVariationProductOnCart(products.variationProduct);
  });

  it("Finalizar compra com sucesso", () => {
    service.clickVariationProduct(products.variationProduct);
    service.selectVariationOption("664");
    service.clickCartBtn();
    expect.showVariationProductOnCart(products.variationProduct);
    service.clickConfirmOrderBtn();
    service.clickCheckoutBtn();
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
