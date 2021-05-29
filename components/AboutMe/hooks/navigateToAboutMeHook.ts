import {useRouter} from 'next/router';
import {useCallback} from 'react';

import ROUTES from '../../../config/Routes';

const useNavigateToAboutMe = () => {
  const router = useRouter();

  const goToAboutMe = useCallback(() => {
    router.push(ROUTES.aboutMe.path);
  }, [router]);

  return {goToAboutMe};
};

export default useNavigateToAboutMe;
