/// <reference types="cypress" />


// cypress chechar om rätt alert kommer upp - dock syns inte själva alertboxen i cypress gränssnitt.. 
describe('Ogiltlig inloggning', () => {
  it('Should display alert message with text "Fel användarnamn eller lösenord" ', () => {
    cy.visit('http://localhost:5173/login');

    cy.get('[data-test-id="input-field-username"]').type('OgiltligAnvändare');
    cy.get('[data-test-id="input-field-password"]').type('OgiltligtLösenord');

    cy.get('[data-test-id="login-button"]').click();
  });

  // if wrong credentials - check alert text
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('Fel användarnamn eller lösenord');
  });
});