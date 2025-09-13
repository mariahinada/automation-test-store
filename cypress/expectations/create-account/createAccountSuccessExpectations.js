import { AbstractExpectation } from "./abstractExpectations"

export class CreateAccountExpectations extends AbstractExpectation {
    successMessageDisplayed() {
        this.expectElementToHaveText('.maintext', "Your Account Has Been Created!");
    }
}