import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      yellow: string;
      grey: string;
      cyan: string;
      blackLight: string;
    };
  }
}
