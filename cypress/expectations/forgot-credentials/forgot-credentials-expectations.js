import { AbstractExpectation } from "../abstract-expectations";
export class ForgotCredentialsExpectations extends AbstractExpectation {
  // mensagem de sucesso para recuperação de senha
  showSuccessMessageForForgotPassword() {
    this.expectElementToHaveText(
      "div.alert.alert-success",
      "Success: Password reset link has been sent to your e-mail address.",
    );
  }

  // mensagem de sucesso para recuperação de login
  showSucessMessageForForgotLogin() {
    this.expectElementToHaveText(
      "div.alert.alert-success",
      "Success: Your login name reminder has been sent to your e-mail address.",
    );
  }

  // mensagem de falha para recuperação de senha/login
  showFailureMessage() {
    this.expectElementToHaveText(
      "div.alert.alert-error.alert-danger",
      "Error: No records found matching information your provided, please check your information and try again!",
    );
  }
}
