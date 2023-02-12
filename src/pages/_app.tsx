import * as React from 'react';
import { Playfair_Display } from '@next/font/google';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../store';
import GlobalStyle from '../styles/globalstyles';
import theme from '../styles/theme';
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const playfair_Display = Playfair_Display({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  // React.useEffect(() => {
  //   const handleRouteStart = () => {
  //     NProgress.start();
  //   };
  //   const handleRouteDone = () => NProgress.done();

  //   Router.events.on('routeChangeStart', handleRouteStart);
  //   Router.events.on('routeChangeComplete', handleRouteDone);
  //   Router.events.on('routeChangeError', handleRouteDone);

  //   return () => {
  //     // Make sure to remove the event handler on unmount!
  //     Router.events.off('routeChangeStart', handleRouteStart);
  //     Router.events.off('routeChangeComplete', handleRouteDone);
  //     Router.events.off('routeChangeError', handleRouteDone);
  //   };
  // }, []);

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
