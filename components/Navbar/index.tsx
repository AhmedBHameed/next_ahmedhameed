import React from 'react';
import styled from 'styled-components';
import {Typography} from '@material-ui/core';
import Footer from './Footer';
import {NextPage} from 'next';
import {useTranslation} from '../../i18n';

const Content = styled.div(props => {
  const {asideMenu, white} = props.theme.colors;
  return `
  width: 100%;
  height: 100%;
  background: ${asideMenu};
  color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
});

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
`;

const BrandName = styled.div`
  text-align: center;
`;

interface NavbarProp {
  themeSwitcher: React.ReactNode;
}

const Navbar: NextPage<NavbarProp> = ({themeSwitcher}) => {
  const {t} = useTranslation();

  return (
    <Content>
      <Box>
        <BrandName>
          <Typography variant="h3" gutterBottom>
            {/* {t('menu.kakiee')} */} Kakiee
          </Typography>
        </BrandName>
        <UnorderedList>
          <List>KAKIEE</List>
          <List>{t('menu.dashboard')}</List>

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

          <List>{themeSwitcher}</List>
        </UnorderedList>
      </Box>

      <Box>
        <Footer />
      </Box>
    </Content>
  );
};

export default Navbar;
