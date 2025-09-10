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
    cy.get(CreateAccountElements.loginOrRegisterBtn).click()
  }

  clickContinueBtnToRegister() {
    cy.get(CreateAccountElements.continueBtnToRegister).click()
  }

  fillFirstName(name) {
    cy.get(CreateAccountElements.firstName).type(name)
  }

  fillLastName(lastName) {
    cy.get(CreateAccountElements.lastName).type(lastName)
  }

  fillEmail(email) {
    cy.get(CreateAccountElements.emailAddress).type(email)
  }

  fillTelephone(telephone) {
    cy.get(CreateAccountElements.telephone).type(telephone)
  }

  fillFax(fax) {
    cy.get(CreateAccountElements.fax).type(fax)
  }

  fillCompany(company) {
    cy.get(CreateAccountElements.company).type(company)
  }

  fillAddress1(address) {
    cy.get(CreateAccountElements.address1).type(address)
  }

  fillAddress2(address) {
    cy.get(CreateAccountElements.address2).type(address)
  }

  fillCity(city) {
    cy.get(CreateAccountElements.city).type(city)
  }

  selectState(state) {
    cy.get(CreateAccountElements.state).select(state)
  }

  fillZipCode(zip) {
    cy.get(CreateAccountElements.zipCode).type(zip)
  }

  selectCountry(country) {
    cy.get(CreateAccountElements.country).select(country)
  }

  fillLoginName(loginName) {
    cy.get(CreateAccountElements.loginName).type(loginName)
  }

  fillPassword(password) {
    cy.get(CreateAccountElements.password).type(password)
  }

  fillConfirmPassword(password) {
    cy.get(CreateAccountElements.confirmPassword).type(password)
  }

  subscribeNewsLetter(option = "yes") {
    cy.get(CreateAccountElements.newsletter).check()
  }

  acceptPrivacyPolicy() {
    cy.get(CreateAccountElements.privacyPolicy).check()
  }

  clickContinueBtnToFinish() {
    cy.get(CreateAccountElements.continueBtnToFinish).click()
  }

  showSuccessMessage() {
    cy.get(CreateAccountElements.successMessage)
  }
}
