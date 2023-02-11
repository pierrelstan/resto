import React from 'react';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';
import Map from './Map';

describe('<Map/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Map />
      </GlobalTheme>
    );
  });
});
