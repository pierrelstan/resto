import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Header from '@/components/Header/Header';

describe('<Header/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Header />
      </GlobalTheme>
    );
    cy.get('[data-cy=title]').should(
      'have.text',
      'We serve high quality foods of all kinds.'
    );
  });
});
