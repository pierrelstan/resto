import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Titles from '../common/Titles';

describe('<Header/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Titles
          fontSize="70"
          color={'white'}
          title={'We serve high quality foods of all kinds.'}
        />
      </GlobalTheme>
    );
  });
});
