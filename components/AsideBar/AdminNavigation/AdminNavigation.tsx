import ROUTES from '../../../config/Routes';
import {useLogout} from '../hooks/LogoutHook';
import List from '../List';
import ListItem from '../ListItem';
import ThemeSwitchButton from '../ThemeSwitchButton';

const AdminNavigation: React.FC = () => {
  const {logout} = useLogout();

  return (
    <nav className="flex flex-col items-center text-center mt-5 flex-1 px-2" aria-label="Sidebar">
      <List>
        <ListItem href={ROUTES.dashboard.path}>Dashboard</ListItem>
        <ListItem href={ROUTES.dashboardArticles.path}>Articles</ListItem>
        <ListItem href={ROUTES.dashboardCategories.path}>Category</ListItem>
        <ListItem href={ROUTES.dashboardMedia.path}>Media</ListItem>
        <ListItem onClick={logout}>Log out</ListItem>
      </List>

      <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
    </nav>
  );
};

export default AdminNavigation;
