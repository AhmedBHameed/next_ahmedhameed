import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import Footer from './Footer';
import {NextPage} from 'next';
import {useTranslation} from '../../i18n';
import Link from 'next/link';
import {ReactComponent as KakieeLogoSvg} from '../../public/kakiee-logo.svg';
import {useRouter} from 'next/router';

const Content = styled.div(props => {
  const {asideMenu, white} = props.theme.colors;
  return `
  width: 100%;
  height: 100%;
  background: ${asideMenu};
  color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
});

const KakieeSvg = styled(KakieeLogoSvg)`
  width: 10rem;
  height: 10rem;
`;

const Box = styled.div``;

const UnorderedList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const List = styled.li`
  color: inherit;
  cursor: pointer;
  position: relative;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  margin-top: 2.4rem;
`;

const BrandName = styled.div`
  text-align: center;
`;

const KakieeBrand = styled(Typography)`
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 4rem;
  color: ${props => props.theme.colors.textColor};
`;

const StyledLink = styled.a<{isActive: boolean}>(props => {
  const {isActive} = props;
  const {textColor, focusColor} = props.theme.colors;
  return `
    position: relative;
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${textColor};
    &:after {
      content: '';
      transform: ${isActive ? `scaleX(1)` : `scaleX(0)`};
      transition: transform 0.5s;
      position: absolute;
      height: 0.2rem;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${focusColor};
    }
    &:hover::after {
      transform: scaleX(1);
    }
  `;
});

interface NavbarProp {
  themeSwitcher: React.ReactNode;
}

const Navbar: NextPage<NavbarProp> = ({themeSwitcher}) => {
  const {t} = useTranslation();
  const {pathname} = useRouter();

  const isActiveLink = useCallback((href: string) => pathname === href, [pathname]);

  return (
    <Content>
      <Box>
        <BrandName>
          <KakieeSvg />
          <KakieeBrand variant="h3" gutterBottom>
            {t('menu.kakiee')}
          </KakieeBrand>
        </BrandName>
        <UnorderedList>
          <List>
            <Link href="/blog" passHref>
              <StyledLink isActive={isActiveLink('/blog')}>{t('menu.blog')}</StyledLink>
            </Link>
          </List>
          <List>
            <Link href="/" passHref>
              <StyledLink isActive={isActiveLink('/')}>{t('menu.dashboard')}</StyledLink>
            </Link>
          </List>
          <List>
            <Link href="/about" passHref>
              <StyledLink isActive={isActiveLink('/about')}>{t('menu.about')}</StyledLink>
            </Link>
          </List>

          <List>{themeSwitcher}</List>
          {/* {(user?.isAdmin || user?.isSuper) && (
          <li>
            <NavLink
              className={classes.links}
              activeClassName={classes.activeLink}
              to={`${ROUTER.ROOT.path}/${ROUTER.DASHBOARD.path}`}
              exact
            >
              {t("menu.dashboard")}
            </NavLink>
          </li>
        )} */}

          {/* <li>
          <NavLink
            isActive={isActive}
            onClick={scrollTop}
            className={classes.links}
            activeClassName={classes.activeLink}
            to={`${ROUTER.ROOT.path}/${ROUTER.BLOGS.path}`}
            exact
          >
            BLOG
          </NavLink>
          <span>{t("menu.blog")}</span>
        </li> */}

          {/* <li>
          <NavLink
            isActive={isActive}
            onClick={scrollTop}
            className={classes.links}
            activeClassName={classes.activeLink}
            to={`${ROUTER.ROOT.path}/`}
            exact
          >
            {t("menu.about")}
          </NavLink>
        </li> */}

          {/* <li>
          <NavLink
            isActive={isActive}
            onClick={scrollTop}
            className={classes.links}
            activeClassName={classes.activeLink}
            to={`${ROUTER.ROOT.path}/${ROUTER.HIREME.path}`}
            exact
          >
            {t("menu.hireMe")}
          </NavLink>
        </li> */}

          {/* <li>
          <NavLink
            isActive={isActive}
            onClick={scrollTop}
            className={classes.links}
            activeClassName={classes.activeLink}
            to={`${ROUTER.ROOT.path}/${ROUTER.CONTACT.path}`}
            exact
          >
            {t("menu.contactMe")}
          </NavLink>
        </li> */}

          {/* {getToken("kakieeToken") ? (
          <li>
            <Link
              className={classes.links}
              onClick={handleLogout}
              to={`${ROUTER.ROOT.path}/${ROUTER.ACCESS.path}/${ROUTER.LOGIN.path}`}
            >
              {t("menu.logout")}
            </Link>
          </li>
        ) : (
          <li>
            <Link
              className={classes.links}
              to={`${ROUTER.ROOT.path}/${ROUTER.ACCESS.path}/${ROUTER.LOGIN.path}`}
            >
              {t("menu.login")}
            </Link>
          </li>
        )} */}
        </UnorderedList>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Content>
  );
};

export default Navbar;
