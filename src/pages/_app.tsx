import { Playfair_Display } from '@next/font/google';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import GlobalStyle from '../styles/globalstyles';
import theme from '../styles/theme';

const playfair_Display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={playfair_Display.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </Provider>
  );
}
