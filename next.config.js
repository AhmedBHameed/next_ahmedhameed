module.exports = {
  publicRuntimeConfig: {
    mapboxApiAccessToken: process.env.REACT_APP_MAP_KEY,
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      include: [require('path').resolve(__dirname, 'statics')],
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
