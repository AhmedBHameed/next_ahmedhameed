import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../../config/Routes';

const useNavigateToLogin = () => {
  const router = useRouter();

  const goToLogin = useCallback(() => {
    router.push(ROUTES.login.path);
  }, [router]);

  return {goToLogin};
};

export default useNavigateToLogin;
