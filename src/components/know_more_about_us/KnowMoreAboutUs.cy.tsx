import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Titles from '../common/Titles';

describe('<KnowMoreAboutUs/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Titles
          fontSize="70"
          color={'white'}
          title={'We source sustainable & line caught Foods'}
        />
      </GlobalTheme>
    );
    cy.get('[data-cy=title1]').should(
      'have.text',
      'We source sustainable & line caught Foods'
    );
  });
});
