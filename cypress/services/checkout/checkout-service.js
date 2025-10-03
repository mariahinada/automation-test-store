import { AbstractService } from "../abstract-service";

export class CheckoutService extends AbstractService {
  elements = {
    // background
    loginOrRegisterBtn: "#customer_menu_top > li > a",
    loginName: "#loginFrm_loginname",
    password: "#loginFrm_password",
    continueBtnToLogin: "#loginFrm > fieldset > button",
    homeBtn: ":nth-child(1) > .active", 

    // carrinho e checkout
    cartBtn: ".cart",
    checkoutBtn: "#checkout_btn",
    confirmOrderBtn: "#cart_checkout1",

    // variações
    variationOption: '[name="option[321]"]',
    addToCart:'button[title="Add to Cart"]'
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

  // adiciona produto simples ao carrinho
  clickSimpleProduct(productName) {
    this.clickChildByText(productName);
  }

  clickCartBtn() {
    this.click(this.elements.cartBtn);
  }

  clickCheckoutBtn() {
    this.click(this.elements.checkoutBtn);
  }

  // adiciona produto com variação ao carrinho
  clickVariationProduct(productName) {
    this.clickChildByText(productName);
  }

  selectVariationOption(optionValue) {
    this.select(this.elements.variationOption, optionValue);
  }

  clickAddToCart() {
    this.click(this.elements.addToCart);
  }

  // finaliza compra com sucesso
  clickConfirmOrderBtn() {
    this.click(this.elements.confirmOrderBtn);
  }
}
