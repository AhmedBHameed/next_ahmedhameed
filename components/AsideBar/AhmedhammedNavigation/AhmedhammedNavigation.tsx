import ROUTES from '../../../config/Routes';
import List from '../List';
import ListItem from '../ListItem';
import OnboardingListItem from '../OnboardingListItem';
import ThemeSwitchButton from '../ThemeSwitchButton';

const AhmedhammedNavigation: React.FC = () => {
  return (
    <nav className="flex flex-col items-center text-center mt-5 flex-1 px-2" aria-label="Sidebar">
      <List>
        {/* <ListItem href={ROUTES.blog.path}>Blog</ListItem> */}
        <ListItem href={ROUTES.aboutMe.path}>About me</ListItem>
        <ListItem href={ROUTES.hireMe.path}>Hire me</ListItem>
        <ListItem href={ROUTES.contactMe.path}>Contact me</ListItem>
        <OnboardingListItem />
      </List>

      <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
    </nav>
  );
};

export default AhmedhammedNavigation;
