import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../config/Routes';

const useNavigateToContactMe = () => {
  const router = useRouter();

  const goToContactMe = useCallback(() => {
    router.push(ROUTES.contactMe.path);
  }, [router]);

  return {goToContactMe};
};

export {useNavigateToContactMe};
