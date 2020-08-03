import 'styled-components';

declare module 'styled-components' {
  export type Size = "desktop" | "mobile"

  export interface DefaultTheme {
    colors: {
      main: string
      secondary: string
    },
    fontSizes: string[],
    media: Media
  }

  export interface Media {
    desktop: (...args: string[]) => CSSProp | undefined;
    mobile: (...args: string[]) => CSSProp | undefined;
  }
}