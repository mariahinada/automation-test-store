import { AbstractExpectation } from "./abstract-expectation"

export class CreateAccountExpectations extends AbstractExpectation {
    successMessageDisplayed() {
        this.expectElementToHaveText('.maintext', "Your Account Has Been Created!");
    }
}