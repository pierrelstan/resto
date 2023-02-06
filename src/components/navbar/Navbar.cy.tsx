import React from 'react';

import { ThemeProvider } from 'styled-components';

import Navbar from './Navbar';
import GlobalStyle from '../../styles/globalstyles';
import theme from '../../styles/theme';

export const GlobalTheme = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

describe('<Navbar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <GlobalTheme>
        <Navbar />
      </GlobalTheme>
    );
    cy.get('li').should('have.length', 7);
  });
});
