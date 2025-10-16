import { AbstractExpectation } from "../abstract-expectations";
export class LoginExpectations extends AbstractExpectation {
  // login com sucesso
  showUserLoggedIn(loginName: string) {
    if (!loginName)
      throw new Error("showUserLoggedIn: loginName não fornecido");
    this.expectUrlToBe(
      "https://automationteststore.com/index.php?rt=account/account",
    );
  }

  // login sem sucesso (usuário ou senha inválidos)
  showInvalidLoginOrPassword() {
    this.expectElementToHaveText(
      "#maincontainer > div > div > div > div.alert.alert-error.alert-danger",
      "Error: Incorrect login or password provided.",
    );
  }
}
