import {renderHook} from '@testing-library/react-hooks';
import ROUTES from '../../../../../config/Routes';
import {mockHistoryPush} from '../../../../../setupTests';

import useNavigateTogoToResetPassword from '../navigateToResetPasswordHook';

it(`redirects to "${ROUTES.resetPassword.path}"`, () => {
  const {result} = renderHook(useNavigateTogoToResetPassword);
  result.current.goToResetPassword();

  expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.resetPassword.path);
});
