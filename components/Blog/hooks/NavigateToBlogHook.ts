import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../config/Routes';

export const useNavigateToBlog = () => {
  const router = useRouter();

  const goToBlog = useCallback(() => {
    router.push(ROUTES.blog.path);
  }, [router]);

  return {goToBlog};
};
