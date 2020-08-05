import baseStyled, {CSSArgs, css, Media, ThemedStyledInterface, DefaultTheme} from 'styled-components';

const minWidths: Record<string, number> = {
  desktop: 768,
  mobile: 480
};

const media: Media = {
  desktop: (...args: CSSArgs) => undefined,
  mobile: (...args: CSSArgs) => undefined
};

const theme: DefaultTheme = {
  colors: {
    main: 'red',
    secondary: 'black'
  },
  fontSizes: ["normal"],
  media
}

Object.keys(minWidths).reduce<Media>((acc: Media, label: string) => {
  switch (label) {
    case "desktop":
      acc.desktop = (...args: CSSArgs) =>
        css`
          @media only screen and (min-width: ${minWidths.desktop}px) {
            ${args}
          }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;