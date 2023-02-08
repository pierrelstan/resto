import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import KnowMoreAboutUs from '@/components/know_more_about_us/KnowMoreAboutUs';

describe('<KnowMoreAboutUs/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <KnowMoreAboutUs />
      </GlobalTheme>
    );
    cy.get('[data-cy=moreAboutUs]').should(
      'have.text',
      'We source sustainable & line caught Foods'
    );
  });
});
