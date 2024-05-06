/// <reference types="cypress" />

// check all 3 usertypes at the same time
describe('Log in as different users', () => {
  ({log:false})
  const users = [
    { username: 'kund', password: 'kund' },
    { username: 'personal', password: 'personal' },
    { username: 'admin', password: 'admin' }
  ];

  users.forEach((user) => {
    it(`Log in as ${user.username} and display correct user page/component`, () => {
      cy.visit('http://localhost:5173/login');
    
      cy.get('[data-test-id="input-field-username"]').type(user.username);
      cy.wait(2000);
      cy.get('[data-test-id="input-field-password"]').type(user.password);
      cy.get('[data-test-id="login-button"]').click();
      cy.wait(1000);

      // assert - check if the right usertype component exist in DOM after login
      switch (user.username) {
        case 'kund':
          cy.wait(2000);
          cy.get('[data-test-id="user-component"]').should('exist');
          break;
        case 'personal':
          cy.wait(2000);
          cy.get('[data-test-id="employee-component"]').should('exist');
          cy.wait(2000);
          break;
        case 'admin':
          cy.get('[data-test-id="admin-component"]').should('exist');
          cy.wait(2000);
          break;
        default:
          cy.get('[data-test-id="login-form"]').should('exist'); 
      }
    });
  });
});