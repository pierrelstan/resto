import React from 'react';
import Footer from '@/components/common/footer/Footer';
import { GlobalTheme } from '@/components/common/navbar/Navbar.cy';

describe('<Footer/>', () => {
  const date = new Date().getFullYear();
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Footer date={date} />
      </GlobalTheme>
    );
    cy.get('p').should('have.text', `© ${date} YayaResto `);
  });
});
