import {useLogoutLazyQuery} from '../../../graphql/queries';
import useNavigateToLogin from '../../Onboarding/Login/hooks/navigateToLoginHook';

const useLogout = () => {
  const {goToLogin} = useNavigateToLogin();
  const [logout] = useLogoutLazyQuery({
    onCompleted: () => {
      goToLogin();
    },
  });

  return {logout};
};

export default useLogout;
