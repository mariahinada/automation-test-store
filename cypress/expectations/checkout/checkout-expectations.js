import { AbstractExpectation } from "../abstract-expectations";

export class CheckoutExpectations extends AbstractExpectation {
    showSimpleProductOnCart() {
        this.expectElementToHaveText(
            "#cart > div > div.container-fluid.cart-info.product-list > table > tbody > tr:nth-child(2) > td:nth-child(2) > a",
            "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15"
        )
    }

    showVariationProductOnCart() {
        this.expectElementByText(
            "Acqua Di Gio Pour Homme"
        )
    }

    removeProduct() {
        this.expectElementToHaveText(
            "#maincontainer > div > div > div > div",
            "Your shopping cart is empty!"
        )
    }

    showOrderProcessed() {
        this.expectElementToHaveText(
            "span.maintext",
            "Your Order Has Been Processed!"
        )
    }
}