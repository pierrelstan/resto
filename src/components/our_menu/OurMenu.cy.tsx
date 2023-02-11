import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Titles from '../common/Titles';

describe('<OurMenu/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Titles
          fontSize="70"
          color={'white'}
          title={'Discover our menu chart'}
        />
      </GlobalTheme>
    );
    cy.get('[data-cy=title1]').should('have.text', 'Discover our menu chart');
  });
});
