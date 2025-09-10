export class CreateAccountService {
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
  }

  clickLoginOrRegister() {
    cy.get(this.elements.loginOrRegisterBtn).click()
  }

  clickContinueBtnToRegister() {
    cy.get(this.elements.continueBtnToRegister).click()
  }

  fillFirstName(name) {
    cy.get(this.elements.firstName).type(name)
  }

  fillLastName(lastName) {
    cy.get(this.elements.lastName).type(lastName)
  }

  fillEmail(email) {
    cy.get(this.elements.emailAddress).type(email)
  }

  fillTelephone(telephone) {
    cy.get(this.elements.telephone).type(telephone)
  }

  fillFax(fax) {
    cy.get(this.elements.fax).type(fax)
  }

  fillCompany(company) {
    cy.get(this.elements.company).type(company)
  }

  fillAddress1(address) {
    cy.get(this.elements.address1).type(address)
  }

  fillAddress2(address) {
    cy.get(this.elements.address2).type(address)
  }

  fillCity(city) {
    cy.get(this.elements.city).type(city)
  }

  selectState(state) {
    cy.get(this.elements.state).select(state)
  }

  fillZipCode(zip) {
    cy.get(this.elements.zipCode).type(zip)
  }

  selectCountry(country) {
    cy.get(this.elements.country).select(country)
  }

  fillLoginName(loginName) {
    cy.get(this.elements.loginName).type(loginName)
  }

  fillPassword(password) {
    cy.get(this.elements.password).type(password)
  }

  fillConfirmPassword(password) {
    cy.get(this.elements.confirmPassword).type(password)
  }

  subscribeNewsLetter(option = "yes") {
    cy.get(this.elements.newsletter).check()
  }

  acceptPrivacyPolicy() {
    cy.get(this.elements.privacyPolicy).check()
  }

  clickContinueBtnToFinish() {
    cy.get(this.elements.continueBtnToFinish).click()
  }

  showSuccessMessage() {
    cy.get(this.elements.successMessage)
  }
}
