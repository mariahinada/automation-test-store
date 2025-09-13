import { AbstractExpectation } from "../abstract-expectations"

export class CreateAccountSuccessExpectations extends AbstractExpectation {
    successMessageDisplayed() {
        this.expectElementToHaveText('.maintext', "Your Account Has Been Created!");
    }
}