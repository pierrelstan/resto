/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });

  it('Should have a title', () => {
    cy.get('[data-cy=title1]')
      .eq(1)
      .should('have.text', 'We source sustainable & line caught Foods');
  });

  it('Should navigate to story page', () => {
    cy.get('button').eq(1).should('have.text', 'View Our Story');
    cy.get('button').eq(1).click({ force: true });
    cy.url().should('include', '/story');
  });
});
