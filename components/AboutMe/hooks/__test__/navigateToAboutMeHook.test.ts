import {renderHook} from '@testing-library/react-hooks';

import ROUTES from '../../../../config/Routes';
import {mockHistoryPush} from '../../../../setupTests';
import useNavigateToAboutME from '../navigateToAboutMeHook';

it(`redirects to "${ROUTES.aboutMe.path}"`, () => {
  const {result} = renderHook(useNavigateToAboutME);
  result.current.goToAboutMe();

  expect(mockHistoryPush).toHaveBeenCalledWith(ROUTES.aboutMe.path);
});
