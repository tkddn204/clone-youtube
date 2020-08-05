import 'styled-components';

declare module 'styled-components' {
  export type Size = "desktop" | "mobile"
  export type CSSArgs = string[];

  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
    },
    fontSizes: string[],
    media: Media
  }

  export interface Media {
    desktop: (...args: CSSArgs) => CSSProp | undefined;
    mobile: (...args: CSSArgs) => CSSProp | undefined;
  }
}