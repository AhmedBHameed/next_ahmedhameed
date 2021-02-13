import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../../config/Routes';

export const useNavigateToDashboard = () => {
  const router = useRouter();

  const goToDashboard = useCallback(() => {
    router.push(ROUTES.dashboard.path);
  }, [router]);

  return {goToDashboard};
};
