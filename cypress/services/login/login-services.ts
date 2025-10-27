import { AbstractService } from "../abstract-services.js";

export class LoginService extends AbstractService {
  elements = {
    loginOrRegisterBtn: "#customer_menu_top > li > a",
    loginName: "#loginFrm_loginname",
    password: "#loginFrm_password",
    continueBtnToLogin: "#loginFrm > fieldset > button",
  };

  clickLoginOrRegisterBtn() {
    this.click(this.elements.loginOrRegisterBtn);
  }

  fillLoginName(loginName : string) {
    this.type(this.elements.loginName, loginName);
  }

  fillPassword(password : string) {
    this.type(this.elements.password, password);
  }

  clickContinueBtnToLogin() {
    this.click(this.elements.continueBtnToLogin);
  }
}
