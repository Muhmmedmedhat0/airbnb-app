import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import store from '../app/store';
import { Provider } from 'react-redux';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const lightTheme = createTheme({
    type: 'light',
    theme: {},
  });

  const darkTheme = createTheme({
    type: 'dark',
    theme: {},
  });
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
