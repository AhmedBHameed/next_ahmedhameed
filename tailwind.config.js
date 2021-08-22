const colors = require('tailwindcss/colors');

const disabledCss = {
  'code::before': false,
  'code::after': false,
  'blockquote p:first-of-type::before': false,
  'blockquote p:last-of-type::after': false,
  pre: false,
  code: false,
  'pre code': false,
  'code::before': false,
  'code::after': false,
};

module.exports = {
  purge: [],
  darkMode: 'class',
  // darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      gray: colors.coolGray,
      green: colors.green,
      blue: colors.lightBlue,
      indigo: colors.indigo,
      red: colors.rose,
      pink: colors.fuchsia,
      emerald: colors.emerald,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1,h2,h3,h4,h5,h6': {
              color: 'var(--color-text-primary)',
            },
            ...disabledCss,
          },
        },
        lg: {css: disabledCss},
      },
      fontFamily: {
        kufiBold: ['Noto Kufi Arabic Bold', 'sans-serif'],
        kufiRegular: ['Noto Kufi Arabic Regular', 'sans-serif'],
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        aside: 'var(--color-bg-aside)',
        subject: 'var(--color-bg-subject)',
        darkSubject: 'var(--color-bg-dark-subject)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        reverse: 'var(--color-text-reverse)',
        subject: 'var(--color-text-subject)',
        darkSubject: 'var(--color-text-dark-subject)',
      },
      borderColor: {
        subject: 'var(--color-border-subject)',
      },
      ringColor: {
        subject: 'var(--color-border-subject)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
