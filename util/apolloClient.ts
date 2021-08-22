// lib/apolloClient.js
import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';

import fetch from 'cross-fetch';
import environment from '../config/environment';

const {domain, graphqlApi, ghostGraphqlDomain} = environment;

// let apolloClientInstance: ApolloClientClass<NormalizedCacheObject>;

// function createApolloClient() {
//   return new ApolloClientClass({
//     ssrMode: typeof window === 'undefined', // set to true for SSR
//     link: new HttpLinkClass({
//       uri: domain + graphqlApi,
//       credentials: 'include',
//     }),
//     cache: new InMemoryCacheClass(),
//   });
// }

// export function initializeApollo(initialState = null) {
//   const createdApolloClient = apolloClientInstance ?? createApolloClient();

//   // If your page has Next.js data fetching methods that use Apollo Client,
//   // the initial state gets hydrated here
//   if (initialState) {
//     // Get existing cache, loaded during client side data fetching
//     const existingCache = createdApolloClient.extract();

//     // Restore the cache using the data passed from
//     // getStaticProps/getServerSideProps combined with the existing cached data
//     createdApolloClient.cache.restore({...existingCache, ...initialState});
//   }

//   // For SSG and SSR always create a new Apollo Client
//   if (typeof window === 'undefined') return createdApolloClient;

//   // Create the Apollo Client once in the client
//   if (!apolloClientInstance) apolloClientInstance = createdApolloClient;
//   return createdApolloClient;
// }

// export function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }

// export async function getStandaloneApolloClient() {
//   // eslint-disable-next-line @typescript-eslint/no-shadow
//   const {ApolloClient, InMemoryCache, HttpLink} = await import(
//     '@apollo/client'
//   );
//   return new ApolloClient({
//     ssrMode: typeof window === 'undefined', // set to true for SSR
//     link: new HttpLink({
//       uri: `${ghostGraphqlDomain}/?key=6ca7e55b684c10622191ed7e1a&fields=title,slug,custom_excerpt,feature_image`,
//       credentials: 'include',
//     }),
//     cache: new InMemoryCache(),
//   });
// }

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined', // set to true for SSR
  link: new HttpLink({
    uri: domain + graphqlApi,
    credentials: 'include',
    fetch,
  }),
  cache: new InMemoryCache(),
});

// const getApolloClient = () =>
//   new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       uri: domain + graphqlApi,
//       credentials: 'include',
//       fetch,
//     }),
//   });

export {client};
