module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'none',
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  }
};