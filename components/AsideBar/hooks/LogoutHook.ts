import {useLogoutLazyQuery} from '../../../graphql/queries';
import {useNavigateToLogin} from './NavigateToLoginHook';

export const useLogout = () => {
  const {goToLogin} = useNavigateToLogin();
  const [logout] = useLogoutLazyQuery({
    onCompleted: () => {
      goToLogin();
    },
  });

  return {logout};
};
