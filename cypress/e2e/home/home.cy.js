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

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should have a title', () => {
    cy.get('[data-cy=title1]')
      .first()
      .should('have.text', 'We serve high quality foods of all kinds.');
  });
  it('Should have a paragraph', () => {
    cy.get('p')
      .first()
      .should(
        'have.text',
        'Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.Through True Rich Attended does no end it his mother'
      );
  });
  it('Should navigate to menu page', () => {
    cy.get('button').first().should('have.text', 'View Menu');
    cy.get('button').eq(0).click();
    cy.url().should('include', '/menu');
  });
});
