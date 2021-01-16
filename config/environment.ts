import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default {
  mapboxApiAccessToken: publicRuntimeConfig.mapboxApiAccessToken,
  domain: publicRuntimeConfig.domain,
  graphqlApi: publicRuntimeConfig.graphqlApi,
};
