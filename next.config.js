module.exports = {
  publicRuntimeConfig: {
    mapboxApiAccessToken: process.env.REACT_APP_MAP_KEY,
    domain: 'http://localhost:5000',
    graphqlApi: '/v1/graphql',
    uploadApi: '/api/upload',
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['assets.vercel.com'],
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  webpack: config => {
    config.node = {
      fs: 'empty',
    };
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   include: [require('path').resolve(__dirname, 'statics')],
    //   use: ['@svgr/webpack'],
    // });

    return config;
  },
};
