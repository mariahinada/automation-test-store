import { AbstractService } from "../abstract-service";

export class ForgotCredentialsService extends AbstractService {
    elements = {
        //background
        loginOrRegisterBtn: "#customer_menu_top > li > a",

        // forgot password form
        forgotPasswordBtn: "a:contains('Forgot your password?')",
        loginName: "#forgottenFrm_loginname",
        email: "#forgottenFrm_email",

        // forgot login form
        forgotLoginBtn: "a:contains('Forgot your login name')",
        lastName: "#forgottenFrm_lastname",

        // submit button
        continueBtnToSubmitForgotCredentials: "#forgottenFrm button:contains('Continue')",
    }

    // background
    clickLoginOrRegisterBtn() {
        this.click(this.elements.loginOrRegisterBtn);
    }

    // forgot password form

    clickForgotPasswordBtn() {
        this.click(this.elements.forgotPasswordBtn);
    }

    fillLoginName(loginName) {
        this.type(this.elements.loginName, loginName)
    }

    fillEmail(email) {
        this.type(this.elements.email, email)
    }

    // forgot login form

    clickForgotLoginBtn() {
        this.click(this.elements.forgotLoginBtn);
    }

    fillLastName(lastName) {
        this.type(this.elements.lastName, lastName);
    }

    // submit button

    clickContinueBtnToSubmitForgotCredentials() {
        this.click(this.elements.continueBtnToSubmitForgotCredentials);
    }
}