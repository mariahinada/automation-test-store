declare namespace Cypress {
    interface Chainable<Subject> {
        navigateToLoginAndRegister(): Chainable<void>;

        loginAndNavigateToHome(): Chainable<void>;

        clearCart(): Chainable<void>;

        navigateToCreateAccount(): Chainable<void>
    }
}