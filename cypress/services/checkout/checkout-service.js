import { AbstractService } from "../abstract-service";

export class CheckoutService extends AbstractService {
  elements = {
    // background
    loginOrRegisterBtn: "#customer_menu_top > li > a",
    loginName: "#loginFrm_loginname",
    password: "#loginFrm_password",
    continueBtnToLogin: "#loginFrm > fieldset > button",
    homeBtn: "#categorymenu > nav > ul > li:nth-child(1) > a",
    // adicionar produto simples ao carrinho
    simpleProduct:
      "#block_frame_latest_1770 > div > div:nth-child(1) > div.thumbnail > div.pricetag.jumbotron > a > i",
    cartBtn: "#main_menu_top > li:nth-child(3) > a",
    // adicionar produto com variação ao carrinho
    variationProduct:
      "#block_frame_special_1772 > div > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > a",
    // finalizar compra com sucesso
    confirmOrderBtn: "#checkout_btn",

    // expectations
    showSimpleProductName: "#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a"
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
    this.clickChildByText("Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", "#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa")
  }

  clickCartBtn() {
    this.click(this.elements.cartBtn);
  }

  // adicionar produto com variaçaõ ao carrinho
  clickVariationProduct() {
    this.clickChildByText("Acqua Di Gio Pour Homme", "#block_frame_special_1772 > div > div:nth-child(2) > div.thumbnail > div.pricetag.jumbotron > a");
  }

  // finalizar compra com sucesso
  clickConfirmOrderBtn() {
    this.click(this.elements.confirmOrderBtn);
  }
}
