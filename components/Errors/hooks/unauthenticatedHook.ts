import {ApolloError} from '@apollo/client';
import {useCallback} from 'react';
import useNavigateToLogin from '../../Onboarding/Login/hooks/navigateToLoginHook';

export const useUnauthenticated = () => {
  const {goToLogin} = useNavigateToLogin();

  const isAuthenticated = useCallback(
    ({graphQLErrors}: ApolloError) => {
      if (
        graphQLErrors.length &&
        graphQLErrors[0].extensions.code === 'UNAUTHENTICATED'
      )
        goToLogin();
    },
    [goToLogin]
  );

  return {
    isAuthenticated,
  };
};
