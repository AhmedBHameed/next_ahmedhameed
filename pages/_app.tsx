import '../styles/styles.css';

import {NextComponentType} from 'next';
import {AppContext, AppInitialProps, AppProps} from 'next/app';
import Head from 'next/head';

import {StylesProvider} from '@material-ui/core/styles';

import {ThemeContextProvider} from '../components/ThemeSwitcher/ThemeContext';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  return (
    <StylesProvider injectFirst>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />
      </Head>

      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </StylesProvider>
  );
};

export default App;
