import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../src/styles/globalstyles';
import theme from '../../src/styles/theme';
import Navbar from '../../src/components/navbar/Navbar';

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
  });
});
