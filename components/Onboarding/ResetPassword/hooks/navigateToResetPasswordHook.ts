import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../../config/Routes';

const useNavigateToResetPassword = () => {
  const router = useRouter();

  const goToResetPassword = useCallback(() => {
    router.push(ROUTES.resetPassword.path);
  }, [router]);

  return {goToResetPassword};
};

export default useNavigateToResetPassword;
