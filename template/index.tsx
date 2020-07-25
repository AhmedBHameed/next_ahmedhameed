import React, {useState} from 'react';
import {AsideMenu, Content, Wrapper, Container} from '../components/Layout';
import ThemeSwitcher, {useThemeChanger} from '../components/ThemeSwitcher';
import Navbar from '../components/Navbar';
import {ThemeProvider} from 'styled-components';
import {LightTheme, DarkTheme} from '../style/Theme';
import BurgerMenu from '../components/Navbar/BurgerMenu';
import Head from 'next/head';

const Template: React.FC = ({children}) => {
  const {isLightTheme, changeTheme} = useThemeChanger();

  const [openMenu, setOpenMenu] = useState(true);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />
      </Head>
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <Container>
          <Wrapper className={openMenu ? 'openMenu' : ''}>
            <AsideMenu>
              <BurgerMenu onClick={() => setOpenMenu(state => !state)} />
              <Navbar themeSwitcher={<ThemeSwitcher onClick={changeTheme} isLightTheme={isLightTheme} />} />
            </AsideMenu>
            <Content>{children}</Content>
          </Wrapper>
        </Container>
      </ThemeProvider>

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
          overflow: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};

export default Template;
