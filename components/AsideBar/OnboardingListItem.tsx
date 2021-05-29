import React from 'react';
import ROUTES from '../../config/Routes';
import useLogout from './hooks/LogoutHook';
import ListItem from './ListItem';

interface OnboardingListItemProps {
  isLoggedIn?: boolean;
}

const OnboardingListItem: React.FC<OnboardingListItemProps> = ({
  isLoggedIn,
}) => {
  const {logout} = useLogout();

  return (
    <>
      {isLoggedIn && <ListItem onClick={logout}>Log out</ListItem>}
      {!isLoggedIn && <ListItem href={ROUTES.login.path}>Log in</ListItem>}
    </>
  );
};

export default OnboardingListItem;
