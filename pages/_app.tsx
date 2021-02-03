import '../styles/styles.css';

import {ApolloProvider} from '@apollo/client';
import {NextComponentType} from 'next';
import {AppContext, AppInitialProps, AppProps} from 'next/app';
import Head from 'next/head';

import {StylesProvider} from '@material-ui/core/styles';
import {ThemeContextProvider} from '../components/ThemeSwitcher/ThemeContext';
import Notification from '../components/Notification/Notification';
import {useApollo} from '../util/apolloClient';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <StylesProvider injectFirst>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <ThemeContextProvider>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
          <Notification />
        </ApolloProvider>
      </ThemeContextProvider>
    </StylesProvider>
  );
};

export default App;
