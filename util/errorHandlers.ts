import {ApolloError} from '@apollo/client';

export const isInvalidPassword = (error: ApolloError) => {
  const graphqlError = error.graphQLErrors;
  return (
    graphqlError.length &&
    graphqlError[0].extensions?.code === 'BAD_USER_INPUT' &&
    graphqlError[0].extensions?.errorCode === 'INVALID_PASSWORD'
  );
};
