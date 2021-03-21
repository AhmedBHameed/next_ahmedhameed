import {ApolloError} from '@apollo/client';
import {useRouter} from 'next/router';
import {useCallback, useEffect} from 'react';
import {useNavigateToLogin} from '../../AsideBar/hooks/NavigateToLoginHook';

export const useUnauthenticated = () => {
  const {goToLogin} = useNavigateToLogin();

  const isAuthenticated = useCallback(
    ({graphQLErrors}: ApolloError) => {
      if (graphQLErrors.length && graphQLErrors[0].extensions.code === 'UNAUTHENTICATED') goToLogin();
    },
    [goToLogin]
  );

  return {
    isAuthenticated,
  };
};
