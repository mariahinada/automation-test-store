import { AbstractService } from "../abstract-service";

export class CheckoutService extends AbstractService {
  elements = {
    // background
    loginOrRegisterBtn: "#customer_menu_top > li > a",
    loginName: "#loginFrm_loginname",
    password: "#loginFrm_password",
    continueBtnToLogin: "#loginFrm > fieldset > button",
    homeBtn: ":nth-child(1) > .active",

    // adicionar produto simples ao carrinho
    simpleProduct:
      "#block_frame_latest_1770 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i",
    cartBtn: ".cart",

    // adicionar produto com variação ao carrinho
    variationProduct:
      "#block_frame_special_1772 > div > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > a",
    variationOption: '[name="option[321]"]',
    addToCart:'button[title="Add to Cart"]',

    // finalizar compra com sucesso
    checkoutBtn: "#checkout_btn",
    confirmOrderBtn: "#cart_checkout1",

    // expectations
    showSimpleProductOnCart: "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15",
    showVariationProductOnCart: "Acqua Di Gio Pour Homme"
  };

  // background
  clickLoginOrRegisterBtn() {
    this.click(this.elements.loginOrRegisterBtn);
  }

  fillLoginName(loginName) {
    this.type(this.elements.loginName, loginName);
  }

  fillPassword(password) {
    this.type(this.elements.password, password);
  }

  clickContinueBtnToLogin() {
    this.click(this.elements.continueBtnToLogin);
  }

  clickHomeBtn() {
    this.click(this.elements.homeBtn);
  }

  // adicionar produto simples ao carrinho
  clickSimpleProduct() {
    this.clickChildByText("Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15")
  }

  clickCartBtn() {
    this.click(this.elements.cartBtn);
  }

  clickcheckoutBtn() {
    this.click(this.elements.checkoutBtn);
  }

  // adicionar produto com variação ao carrinho
  clickVariationProduct() {
    this.clickChildByText("Acqua Di Gio Pour Homme");
  }

  selectVariationOption(optionValue) {
    this.select(this.elements.variationOption, optionValue)
  }

  clickaddToCart() {
    this.click(this.elements.addToCart)
  }

  // finalizar compra com sucesso
  clickConfirmOrderBtn() {
    this.click(this.elements.confirmOrderBtn);
  }
}
