import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Titles from '../common/Titles';

describe('<WhatWeAreServing/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Titles
          fontSize="70"
          color={'white'}
          title={'We all have to eat, so Why not do it beautifully?'}
        />
      </GlobalTheme>
    );
    cy.get('[data-cy=title1]').should(
      'have.text',
      'We all have to eat, so Why not do it beautifully?'
    );
  });
});
