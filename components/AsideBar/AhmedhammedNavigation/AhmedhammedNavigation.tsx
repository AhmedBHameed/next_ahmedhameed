import {NextComponentType} from 'next';
import {AppContext, AppInitialProps} from 'next/app';
import ROUTES from '../../../config/Routes';
import {parseCookies} from '../../../util/parseCookies';
import List from '../List';
import ListItem from '../ListItem';
import OnboardingListItem from '../OnboardingListItem';
import ThemeSwitchButton from '../ThemeSwitchButton';

interface AhmedhammedNavigationProps {
  isLoggedIn?: boolean;
}

const AhmedhammedNavigation: NextComponentType<
  AppContext,
  AppInitialProps,
  AhmedhammedNavigationProps
> = ({isLoggedIn}) => (
  <nav
    aria-label="Sidebar"
    className="flex flex-col items-center text-center mt-5 flex-1 px-2"
  >
    <List>
      <ListItem href={ROUTES.aboutMe.path}>About me</ListItem>
      <ListItem href={ROUTES.portfolio.path}>Portfolio</ListItem>
      <ListItem href={ROUTES.hireMe.path}>Hire me</ListItem>
      <ListItem href={ROUTES.contactMe.path}>Contact me</ListItem>
      <OnboardingListItem isLoggedIn />
    </List>

    <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
  </nav>
);

AhmedhammedNavigation.getInitialProps = async (props) => {
  // const isServer = !!props.req;
  const isBrowser = !props.ctx.req;

  if (isBrowser) {
    console.log(isBrowser);

    return {
      pageProps: {},
    };
  }

  const cookies = parseCookies(props.ctx.req.headers.cookie);
  console.log(
    '🚀 ~ file: _app.tsx ~ line 101 ~ Auth.getInitialProps= ~ cookies',
    cookies
  );
  return {
    pageProps: {
      isLoggedIn: false,
    },
  };
};

export default AhmedhammedNavigation;
