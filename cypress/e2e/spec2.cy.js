// ignore uncaught exceptions from cross-origin scripts
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Fill Practice Form', () => {
  const test_url = 'https://demoqa.com';

  beforeEach(() => {
    cy.visit(test_url);
  });

  it('should fill out the form successfully', () => {
    // forms -> practice Form
    cy.contains('Forms').click();
    cy.wait(3000);

    cy.contains('Practice Form').click();
    cy.wait(3000);

    // filling the form
    cy.get('#firstName').type('Simon');
    cy.get('#lastName').type('Riley');
    cy.get('#userEmail').type('Simon.Riley@example.com');

    cy.contains('label', 'Male').click();
    cy.get('#userNumber').type('9875558922');

    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('May');
    cy.get('.react-datepicker__year-select').select('1984');
    cy.get('.react-datepicker__day--017').click();

    cy.get('#subjectsInput').type('Physics');
    cy.contains('.subjects-auto-complete__option', 'Physics').click();
    cy.wait(1000);

    cy.contains('label', 'Sports').click();
    cy.wait(1500);

    cy.get('#currentAddress').type('2222 Mountain St, Manchester, United Kingdom');
    cy.wait(2000);

    cy.get('#react-select-3-input').type('NCR{enter}', { force: true });
    cy.get('#react-select-4-input').type('Delhi{enter}', { force: true });
    cy.wait(1000);

    cy.get('#submit').click();
    cy.wait(3000);

    // confirms that form is submitted successfully
    cy.contains('Thanks for submitting the form').should('be.visible');
  });
});
