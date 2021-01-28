import getConfig from 'next/config';

const {publicRuntimeConfig} = getConfig();

export default {
  mapboxApiAccessToken: publicRuntimeConfig.mapboxApiAccessToken,
  domain: publicRuntimeConfig.domain,
  graphqlApi: publicRuntimeConfig.graphqlApi,
  uploadApi: publicRuntimeConfig.uploadApi,
  uploadFileTypes: 'image/jpeg,image/jpg,image/png,image/gif',
  noImageAvatar: 'media/no-image_1611590207122.png',
};
