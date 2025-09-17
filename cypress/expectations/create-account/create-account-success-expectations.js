import { AbstractExpectation } from "../abstract-expectations";

export class CreateAccountSuccessExpectations extends AbstractExpectation {
  showSuccessMessage() {
    this.expectElementToHaveText(".maintext", "Your Account Has Been Created!");
  }
}
