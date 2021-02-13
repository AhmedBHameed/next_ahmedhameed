import ROUTES from '../../../config/Routes';
import List from '../List';
import ListItem from '../ListItem';
import OnboardingListItem from '../OnboardingListItem';
import ThemeSwitchButton from '../ThemeSwitchButton';

const BlogNavigation = () => {
  return (
    <nav className="flex flex-col items-center text-center mt-5 flex-1 px-2" aria-label="Sidebar">
      <List>
        <ListItem href={ROUTES.blog.path}>Blog</ListItem>
        <ListItem href={ROUTES.articlesArchive.path}>Archive (All Articles)</ListItem>
        <ListItem href={ROUTES.aboutMe.path}>About kakiee</ListItem>
        <OnboardingListItem />
      </List>

      <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
    </nav>
  );
};

export default BlogNavigation;
