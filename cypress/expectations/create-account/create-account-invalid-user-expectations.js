import { AbstractExpectation } from "../abstract-expectations"

export class CreateAccountInvalidUserExpectations extends AbstractExpectation {
    showInvalidUserAlert() {
        this.expectElementToHaveText(
            '.alert', 
            'Login name must be alphanumeric only and between 5 and 64 characters!'
        )
    }
}