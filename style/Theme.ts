// Dark theme.
const materialBlueGray = '#455a64';
const materialBlueDark = '#37474f';
const materialBlue = '#263238';
const turquoise = '#1de9b6';

// Light theme.
const gray = '#e0e0e0';
const darkGray = '#bdbdbd';
const lightGray = '#fafafa';
const lightGrayColor = '#636363';
const dirtyTurquoise = '#228896';

const black = '#000';
const white = '#fff';

export enum THEME_TYPE {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

const DarkTheme = {
  darken: (color: string, percent: number) => '',
  colors: {
    asideMenu: materialBlueGray,
    headingSections: materialBlueDark,
    mainBackground: materialBlue,
    textColor: white,
    focusColor: turquoise,
    black,
    white,
  },
};

const LightTheme = {
  darken: (color: string, percent: number) => '',
  colors: {
    asideMenu: gray,
    headingSections: lightGray,
    mainBackground: darkGray,
    textColor: lightGrayColor,
    focusColor: dirtyTurquoise,
    black,
    white,
  },
};

export {LightTheme, DarkTheme};
