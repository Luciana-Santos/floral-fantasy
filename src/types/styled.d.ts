import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      prata: string;
      lato: string;
    };
    colors: {
      white: string;
      black: string;
      accent: string;
      darkGray: string;
      vlBrown: string;
      vlBlue: string;
      lBrown: string;
      prodBlue: string;
      prodGreen: string;
      prodRed: string;
      prodPurple: string;
      prodYellow: string;
    };
    breakpoints: {
      minWidth: {
        md: string;
        lg: string;
        xlg: string;
      };
      maxWidth: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
