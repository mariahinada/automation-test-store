import { AbstractService } from '../abstract-services';

export class CreateAccountService extends AbstractService {
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
    successMessage: ".maintext",
    invalidUserAlert:"#maincontainer > div > div > div > div.alert.alert-error.alert-danger",
    invalidPasswordAlert:
    "#maincontainer > div > div > div > div.alert.alert-error.alert-danger",
  };

clickLoginOrRegister() {
    this.click(this.elements.loginOrRegisterBtn);
  }

  clickContinueBtnToRegister() {
    this.click(this.elements.continueBtnToRegister);
  }

  fillFirstName(name : string) {
    this.type(this.elements.firstName, name);
  }

  fillLastName(lastName : string) {
    this.type(this.elements.lastName, lastName);
  }

  fillEmail(email : string) {
    this.type(this.elements.emailAddress, email);
  }

  fillTelephone(telephone : string) {
    this.type(this.elements.telephone, telephone);
  }

  fillFax(fax : string) {
    this.type(this.elements.fax, fax);
  }

  fillCompany(company : string) {
    this.type(this.elements.company, company);
  }

  fillAddress1(address : string) {
    this.type(this.elements.address1, address);
  }

  fillAddress2(address : string) {
    this.type(this.elements.address2, address);
  }

  fillCity(city : string) {
    this.type(this.elements.city, city);
  }

  selectState(state : string) {
    this.select(this.elements.state, state);
  }

  fillZipCode(zip : string) {
    this.type(this.elements.zipCode, zip);
  }

  selectCountry(country : string) {
    this.select(this.elements.country, country);
  }

  fillLoginName(loginName : string) {
    this.type(this.elements.loginName, loginName);
  }

  fillPassword(password : string) {
    this.type(this.elements.password, password);
  }

  fillConfirmPassword(password : string) {
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

  showSuccessMessage() {
    this.getText(this.elements.successMessage);
  }

    showInvalidUserAlert() {
    this.getText(this.elements.invalidUserAlert);
  }

    showInvalidPasswordAlert() {
    this.getText(this.elements.invalidPasswordAlert);
  }

}
