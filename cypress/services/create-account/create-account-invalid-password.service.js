import { AbstractService } from "../abstract-service";

export class CreateAccountInvalidPasswordService extends AbstractService {
  elements = {
    loginOrRegisterBtn: "#customer_menu_top > li > a",
    continueBtnToRegister: "#accountFrm > fieldset > .btn",
    firstName: "#AccountFrm_firstname",
    lastName: "#AccountFrm_lastname",
    emailAddress: "#AccountFrm_email",
    telephone: "#AccountFrm_telephone",
    fax: "#AccountFrm_fax",
    company: "#AccountFrm_company",
    address1: "#AccountFrm_address_1",
    address2: "#AccountFrm_address_2",
    city: "#AccountFrm_city",
    state: "#AccountFrm_zone_id",
    zipCode: "#AccountFrm_postcode",
    country: "#AccountFrm_country_id",
    loginName: "#AccountFrm_loginname",
    password: "#AccountFrm_password",
    confirmPassword: "#AccountFrm_confirm",
    newsletter: "#AccountFrm_newsletter1",
    privacyPolicy: "#AccountFrm_agree",
    continueBtnToFinish: ".col-md-2 > .btn",
    invalidPasswordAlert:
      "#maincontainer > div > div > div > div.alert.alert-error.alert-danger",
  };

  clickLoginOrRegister() {
    this.click(this.elements.loginOrRegisterBtn);
  }

  clickContinueBtnToRegister() {
    this.click(this.elements.continueBtnToRegister);
  }
  fillFirstName(name) {
    this.type(this.elements.firstName, name);
  }

  fillLastName(lastName) {
    this.type(this.elements.lastName, lastName);
  }

  fillEmail(email) {
    this.type(this.elements.emailAddress, email);
  }

  fillTelephone(telephone) {
    this.type(this.elements.telephone, telephone);
  }

  fillFax(fax) {
    this.type(this.elements.fax, fax);
  }

  fillCompany(company) {
    this.type(this.elements.company, company);
  }

  fillAddress1(address) {
    this.type(this.elements.address1, address);
  }

  fillAddress2(address) {
    this.type(this.elements.address2, address);
  }

  fillCity(city) {
    this.type(this.elements.city, city);
  }

  selectState(state) {
    this.select(this.elements.state, state);
  }

  fillZipCode(zip) {
    this.type(this.elements.zipCode, zip);
  }

  selectCountry(country) {
    this.select(this.elements.country, country);
  }

  fillLoginName(loginName) {
    this.type(this.elements.loginName, loginName);
  }

  fillPassword(password) {
    this.type(this.elements.password, password);
  }

  fillConfirmPassword(password) {
    this.type(this.elements.confirmPassword, password);
  }

  subscribeNewsLetter() {
    this.check(this.elements.newsletter);
  }

  acceptprivacyPolicy() {
    this.check(this.elements.privacyPolicy);
  }

  clickContinueBtnToFinish() {
    this.click(this.elements.continueBtnToFinish);
  }

  showInvalidPasswordAlert() {
    this.get(this.elements.invalidPasswordAlert);
  }
}
