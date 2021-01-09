import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    darken: (color: string, percent: number) => string;
    colors: {
      bgPrimary: string;
      bgHeading: string;
      bgAside: string;
      textPrimary: string;
      textSecondary: string;
      textTurquoise: string;
      textDirtyTurquoise: string;
      black: string;
      white: string;
    };
  }
}
