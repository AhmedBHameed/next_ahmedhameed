import ROUTES from '../../config/Routes';
import MailIcon from '../../statics/email.svg';
import GithubIcon from '../../statics/github-sign.svg';
import HeartIcon from '../../statics/heart.svg';
import LinkedinIcon from '../../statics/linkedin-sign.svg';
import Brand from './Brand';
import {useLogout} from './hooks/LogoutHook';
import useMousePosition from './hooks/mousePosition';
import List from './List';
import ListItem from './ListItem';
import ThemeSwitchButton from './ThemeSwitchButton';

interface AdminNavbarProps {
  openMenu: boolean;
  onMenuClick: () => void;
}

const AdminNavbar: React.FC<AdminNavbarProps> = ({openMenu, onMenuClick}) => {
  const {elementRef, toggleMenu} = useMousePosition();

  const {logout} = useLogout();

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex bg-primary transition-transform transform duration-700 ${
        openMenu ? 'translate-x-0' : '-translate-x-72'
      }`}
    >
      <div className="w-72 bg-aside flex flex-col flex-shrink-0 pr-3 h-screen">
        <div className="flex-1 flex flex-col pt-5 pb-4">
          <Brand />
          <nav className="flex flex-col items-center mt-5 flex-1 px-2" aria-label="Sidebar">
            <List>
              <ListItem href={ROUTES.blog.path}>Articles</ListItem>
              <ListItem href={ROUTES.dashboardCategory.path}>Category</ListItem>
              <ListItem onClick={logout}>Log out</ListItem>
            </List>

            <ThemeSwitchButton className="focus:border-none focus:outline-none text-primary mt-4" />
          </nav>
        </div>

        <div className="flex flex-col flex-shrink-0">
          <div className="flex flex-col text-center content-center flex-1 p-4 mb-10 text-primary text-sm">
            <p className="mb-2">
              <span className="text-secondary">
                © 2021 kakiee.at, All rights reserved.
                <br />
                Made with
              </span>
              <HeartIcon className="inline h-5 text-red-500" />
              <span className="text-secondary">by </span>
              <span className="text-accent font-bold">Ahmed HAMEED</span>
            </p>
            <div className="flex justify-center text-secondary">
              <a
                className="cursor-pointer p-1"
                href="https://www.linkedin.com/in/ahmed-hameed-185b3612b/"
                target="_blank"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>

              <a className="cursor-pointer p-1" href="https://github.com/AhmedBHameed" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </a>

              <a className="cursor-pointer p-1" href="mailto:contact.kakiee@gmail.com" target="_blank">
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <button
        ref={elementRef}
        className="text-primary h-9 w-7 absolute top-0 right-0 transform rounded-r-full p-1 bg-aside focus:border-none focus:outline-none"
        onClick={() => {
          toggleMenu(!openMenu);
          onMenuClick();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

export default AdminNavbar;
