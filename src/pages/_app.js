import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
// import { getCookie, setCookie } from 'cookies-next';
import { store } from '../store/store';
import { Provider } from 'react-redux'
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { SessionProvider } from "next-auth/react"
import { NotificationsProvider } from '@mantine/notifications';
import NextNProgress from 'nextjs-progressbar';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = ({ Component, ...pageProps }) => {

  const [colorScheme, setColorScheme] = useState(ColorScheme);

  const toggleColorScheme = (ColorScheme) => {
    const nextColorScheme = (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    // setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>eBakery Shop</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />

        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <NextNProgress color="#12b886" options={{ showSpinner: false }} />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Provider store={store}>
              <SessionProvider session={pageProps?.session}>
                <Component {...pageProps} />
              </SessionProvider>
            </Provider>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }) => ({
  // colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});


export default App;