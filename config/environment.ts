import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default {
  mapboxApiAccessToken: publicRuntimeConfig.mapboxApiAccessToken,
};
