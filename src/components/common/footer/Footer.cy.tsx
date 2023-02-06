import React from 'react';
import Footer from '@/components/common/footer/Footer';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';

describe('<Footer/>', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Footer />
      </GlobalTheme>
    );
    cy.get('a').should('have.length', 3);
  });
});
