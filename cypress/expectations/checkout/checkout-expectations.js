import { AbstractExpectation } from "../abstract-expectations";
export class CheckoutExpectations extends AbstractExpectation {
  
  showSimpleProductOnCart(productName) {
    if (!productName)
      throw new Error("showSimpleProductOnCart: productName não fornecido");
    this.expectElementToHaveText(
      "#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a",
      productName
    );
  }

  showVariationProductOnCart(productName) {
    if (!productName)
      throw new Error("showVariationProductOnCart: productName não fornecido");
    this.expectElementByText(productName);
  }

  showEmptyCartAfterRemoval() {
    this.expectElementToHaveText(
      "#maincontainer > div > div > div > div",
      "Your shopping cart is empty!"
    );
  }

  showOrderProcessed() {
    this.expectElementToHaveText(
      "span.maintext",
      "Your Order Has Been Processed!"
    );
  }
}
