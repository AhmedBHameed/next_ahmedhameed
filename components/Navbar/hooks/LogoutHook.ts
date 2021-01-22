import {useCallback} from 'react';
import {useCookies} from 'react-cookie';
import {useNavigateToLogout} from './NavigateToLogoutHook';

export const useLogout = () => {
  const [_, __, removeCookie] = useCookies();
  const {goToLogout} = useNavigateToLogout();

  const logout = useCallback(() => {
    removeCookie('access-token');
    removeCookie('refresh-token');
    goToLogout();
  }, [goToLogout, removeCookie]);

  return {logout};
};
