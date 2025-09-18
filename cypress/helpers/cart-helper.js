export const CartHelper = {
  clearCart() {
    // Acessa a página do carrinho
    cy.visit('/index.php?rt=checkout/cart');

    // remove todos os itens do carrinho, se houver
    cy.get(':nth-child(2) > :nth-child(7) > .btn').then(($buttons) => {
      if ($buttons.length > 0) {
        cy.wrap($buttons).each(($btn) => {
          cy.wrap($btn).click({ multiple: true });
        });
      }
    });

    // confirma que o carrinho está vazio
    cy.get('.contentpanel').should('contain.text', 'Your shopping cart is empty');
  }
};