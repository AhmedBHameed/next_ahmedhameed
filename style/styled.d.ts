import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darken: (color: string, percent: number) => string;
    colors: {
      asideMenu: string;
      headingSections: string;
      mainBackground: string;
      textColor: string;
      black: string;
      white: string;
    };
  }
}
