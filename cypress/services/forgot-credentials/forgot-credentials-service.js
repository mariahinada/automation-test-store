import { AbstractService } from "../abstract-service";

export class ForgotCredentialsService extends AbstractService {
  elements = {
    //background
    loginOrRegisterBtn: "#customer_menu_top > li > a",

    // formulário de recuperação de senha
    forgotPasswordBtn: "a:contains('Forgot your password?')",
    loginName: "#forgottenFrm_loginname",
    email: "#forgottenFrm_email",

    // formulário de recuperação de login
    forgotLoginBtn: "a:contains('Forgot your login')",
    lastName: "#forgottenFrm_lastname",

    // botão de submit
    continueBtnToSubmitForgotCredentials:
      "#forgottenFrm button:contains('Continue')",
  };

  // background
  clickLoginOrRegisterBtn() {
    this.click(this.elements.loginOrRegisterBtn);
  }

  // formulário de recuperação de senha

  clickForgotPasswordBtn() {
    this.click(this.elements.forgotPasswordBtn);
  }

  fillLoginName(loginName) {
    this.type(this.elements.loginName, loginName);
  }

  fillEmail(email) {
    this.type(this.elements.email, email);
  }

  // formulário de recuperação de login

  clickForgotLoginBtn() {
    this.click(this.elements.forgotLoginBtn);
  }

  fillLastName(lastName) {
    this.type(this.elements.lastName, lastName);
  }

  // botão de submit

  clickContinueBtnToSubmitForgotCredentials() {
    this.click(this.elements.continueBtnToSubmitForgotCredentials);
  }
}
