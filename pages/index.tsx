import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import en from '../locales/en.json';

interface HomeProps {
  changeTheme: () => void;
  isLightTheme: boolean;
}

const Home: NextPage<HomeProps> = ({changeTheme}) => {
  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? en : en;

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 13 ~ changeTheme', changeTheme);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />

        <title>Ahmed HAMEED</title>
      </Head>

      <h1>{t.menu.kakiee}</h1>
    </>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

export default Home;
