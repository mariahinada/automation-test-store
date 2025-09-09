import { CreateAccountElements } from "../elements/create-account-elements"

export class CreateAccountService {
  clickLoginOrRegister() {
    cy.get(CreateAccountElements.clickLoginOrRegisterBtn).click()
  }

  clickContinue() {
    cy.get(CreateAccountElements.continueBtn).click()
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
}
