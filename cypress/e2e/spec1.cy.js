describe('Add Product to Cart', () => {
  const test_url = 'https://www.demoblaze.com/index.html';

  beforeEach(() => {
    // Visit the test URL
    cy.visit(test_url);
  });

  it('should log in and add product to cart', () => {
    // login
    cy.get('#login2').click();
    cy.wait(3000);
    cy.get('#loginusername').type('test');
    cy.get('#loginpassword').type('test');
    cy.contains('button', 'Log in').click();
    cy.wait(3000);

    // selects category->products->adds to cart
    cy.contains('Monitors').click();
    cy.wait(4000);

    cy.contains('Apple monitor 24').click();
    cy.wait(4000);

    cy.contains('Add to cart').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });

    // placing order
    cy.contains('Cart').click();
    cy.wait(3000);
    cy.contains('button', 'Place Order').click();
    cy.wait(3000);

    // filling form and completes purchase
    cy.get('#name').type('Anatoli Vanyamin');
    cy.get('#country').type('Ukraine');
    cy.get('#city').type('Austin');
    cy.get('#card').type('1234 5678 9876 5432');
    cy.get('#month').type('12');
    cy.get('#year').type('2025');

    cy.contains('button', 'Purchase').click();
  });
});
