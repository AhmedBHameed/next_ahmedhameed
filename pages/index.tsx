import {useState, useEffect} from 'react';
import {AsideMenu, Content, Wrapper, Container} from '../components/Layout';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Navbar from '../components/Navbar';
import BurgerMenu from '../components/Navbar/BurgerMenu';
import Head from 'next/head';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import en from '../locales/en.json';

interface HomeProps {
  changeTheme: () => void;
  isLightTheme: boolean;
}

const Home: NextPage<HomeProps> = ({children, changeTheme, isLightTheme}) => {
  const router = useRouter();
  const {locale} = router;
  const t = locale === 'en' ? en : en;

  const [openMenu, setOpenMenu] = useState(true);

  useEffect(() => {
    console.log('🚀 ~ file: index.tsx ~ line 13 ~ changeTheme', changeTheme);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />

        <title>KAKIEE</title>
      </Head>

      <Container>
        <Wrapper className={openMenu ? 'openMenu' : ''}>
          <AsideMenu>
            <BurgerMenu onClick={() => setOpenMenu(state => !state)} />
            <Navbar themeSwitcher={<ThemeSwitcher onClick={changeTheme} isLightTheme={isLightTheme} />} />
          </AsideMenu>
          <Content>{children}</Content>
        </Wrapper>
      </Container>

      <h1>{t.menu.kakiee}</h1>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
          width: 100%;
          height: 100vh;
        }

        html {
          font-size: 10px;
        }

        #__next {
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

// Home.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'footer'],
// });

export default Home;
