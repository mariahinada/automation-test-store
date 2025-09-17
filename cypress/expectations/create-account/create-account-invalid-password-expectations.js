import { AbstractExpectation } from "../abstract-expectations";

export class CreateAccountInvalidPasswordExpectations extends AbstractExpectation {
  showInvalidPasswordAlert() {
    this.expectElementToHaveText(
      ".alert",
      "Password must be between 4 and 20 characters!"
    );
  }
}
