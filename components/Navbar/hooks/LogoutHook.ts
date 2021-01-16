import {useCallback} from 'react';
import {useCookies} from 'react-cookie';

export const useLogout = () => {
  const [_, __, removeCookie] = useCookies();

  const logout = useCallback(() => {
    removeCookie('access-token');
    removeCookie('refresh-token');
  }, [removeCookie]);

  return {logout};
};
