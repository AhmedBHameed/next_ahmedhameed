import React from 'react';
import ROUTES from '../../config/Routes';
import {useProfileQuery} from '../../graphql/queries';
import {useLogout} from './hooks/LogoutHook';
import ListItem from './ListItem';

const OnboardingListItem: React.FC = () => {
  const {logout} = useLogout();

  const {data} = useProfileQuery();

  const isLoggedIn = !!data?.profile;

  return (
    <>
      {isLoggedIn && <ListItem onClick={logout}>Log out</ListItem>}
      {!isLoggedIn && <ListItem href={ROUTES.login.path}>Log in</ListItem>}
    </>
  );
};

export default OnboardingListItem;
