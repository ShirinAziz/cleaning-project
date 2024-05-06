/// <reference types="cypress" />
//https://example.cypress.io

// check one usertype at time
describe('Log in as customer', () => {
  it('If successful login with correct customer credentials - display customer page (component) ', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('[data-test-id="input-field-username"]').type('kund')
    cy.get('[data-test-id="input-field-password"]').type('kund')
    cy.get('[data-test-id="login-button"]').click()
    cy.wait(1000);

    // assert - check if user component exist in DOM
    cy.get('[data-test-id="user-component"]').should('exist');
  });
});
