import {useRouter} from 'next/router';
import {useCallback} from 'react';
import ROUTES from '../../../config/Routes';

export const useNavigateToLogout = () => {
  const router = useRouter();

  const goToLogout = useCallback(() => {
    router.push(ROUTES.login.path);
  }, [router]);

  return {goToLogout};
};
