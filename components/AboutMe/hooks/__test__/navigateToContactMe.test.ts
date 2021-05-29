import {renderHook} from '@testing-library/react-hooks';

import ROUTES from '../../../../config/Routes';
import {mockHistoryPush} from '../../../../setupTests';
import useNavigateToContactMe from '../navigateToContactMe';

it(`redirects to "${ROUTES.contactMe.path}"`, () => {
  const {result} = renderHook(useNavigateToContactMe);
  result.current.goToContactMe();

  expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.contactMe.path);
});
