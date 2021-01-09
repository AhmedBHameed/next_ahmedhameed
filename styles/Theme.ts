import {Theme} from '@emotion/react';

// Light theme.
const bgPrimary = '#fafafa';
const bgHeading = '#bdbdbd';
const bgAside = '#e0e0e0';

// Dark theme.
const darkBgPrimary = '#263238';
const darkBgHeading = '#37474f';
const darkBgAside = '#455a64';

// Text colors
const textPrimary = '#4e4e4e';
const textSecondary = '#757575';
const textTurquoise = '#1de9b6';
const textDirtyTurquoise = '#228896';

// Common colors
const black = '#000';
const white = '#fff';

export enum THEME_TYPE {
  DARK = 'dark',
  LIGHT = 'light',
}

// const lightThemeColors = {
//   bgPrimary: bgPrimary,
//   bgHeading: bgHeading,
//   bgAside: bgAside,
// };

const darkThemeColors = {
  bgPrimary: darkBgPrimary,
  bgHeading: darkBgHeading,
  bgAside: darkBgAside,
};

export const theme = {
  darken: (_color: string, _percent: number) => '',
  colors: {
    ...darkThemeColors,
    textPrimary,
    textSecondary,
    textTurquoise,
    textDirtyTurquoise,
    black,
    white,
  },
};
