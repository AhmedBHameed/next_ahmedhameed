import {renderHook} from '@testing-library/react-hooks';
import ROUTES from '../../../../../config/Routes';
import {mockHistoryPush} from '../../../../../setupTests';

import useNavigateToLogin from '../navigateToLoginHook';

it(`redirects to "${ROUTES.login.path}"`, () => {
  const {result} = renderHook(useNavigateToLogin);
  result.current.goToLogin();

  expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.login.path);
});
