import ROUTES from '../../../config/Routes';
import {useProfileQuery} from '../../../graphql/queries';
import {useLogout} from '../hooks/LogoutHook';
import List from '../List';
import ListItem from '../ListItem';
import ThemeSwitchButton from '../ThemeSwitchButton';

const BlogNavigation = () => {
  const {logout} = useLogout();
  const {data} = useProfileQuery();

  const isLoggedIn = !!data?.profile;
  return (
    <nav className="flex flex-col items-center text-center mt-5 flex-1 px-2" aria-label="Sidebar">
      <List>
        <ListItem href={ROUTES.blog.path}>Blog</ListItem>
        <ListItem href={ROUTES.articlesArchive.path}>Archive (All Articles)</ListItem>
        <ListItem href={ROUTES.aboutMe.path}>About kakiee</ListItem>
        {isLoggedIn && <ListItem onClick={logout}>Log out</ListItem>}
        {!isLoggedIn && <ListItem href={ROUTES.login.path}>Log in</ListItem>}
      </List>

      <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
    </nav>
  );
};

export default BlogNavigation;
