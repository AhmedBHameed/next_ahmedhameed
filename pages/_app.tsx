import {NextComponentType} from 'next';
import {AppContext, AppInitialProps, AppProps} from 'next/app';
import nextI18next from '../i18n';
import {StylesProvider} from '@material-ui/core/styles';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({Component, pageProps}) => {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />)
    </StylesProvider>
  );
};

export default nextI18next.appWithTranslation(App);
