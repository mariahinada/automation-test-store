import { AbstractExpectation } from "../abstract-expectations";

export class CreateAccountSuccessExpectations extends AbstractExpectation {
  showSuccessMessage() {
    this.expectElementToHaveText(".maintext", "Your Account Has Been Created!");
  }
}

export class CreateAccountInvalidUserExpectations extends AbstractExpectation {
  showInvalidUserAlert() {
    this.expectElementToHaveText(
      ".alert",
      "Login name must be alphanumeric only and between 5 and 64 characters!",
    );
  }
}

export class CreateAccountInvalidPasswordExpectations extends AbstractExpectation {
  showInvalidPasswordAlert() {
    this.expectElementToHaveText(
      ".alert",
      "Password must be between 4 and 20 characters!",
    );
  }
}
