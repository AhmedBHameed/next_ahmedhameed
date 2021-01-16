module.exports = {
  publicRuntimeConfig: {
    mapboxApiAccessToken: process.env.REACT_APP_MAP_KEY,
    domain: process.env.REACT_APP_DOMAIN_DEV,
    graphqlApi: process.env.REACT_APP_GRAPHQL,
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['assets.vercel.com'],
  },
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     include: [require('path').resolve(__dirname, 'statics')],
  //     use: ['@svgr/webpack'],
  //   });

  //   return config;
  // },
};
