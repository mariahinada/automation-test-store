import { CreateAccountElements } from "../elements/create-account-elements"

export const CreateAccountExpectations = {
    sucessMessageDisplayed() {
        cy.get(CreateAccountElements.successMessage)
        .should("contain.text"," Your Account Has Been Created!")
    }
}