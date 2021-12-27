import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

type GlobalStyleProps = {
  theme: ThemeType;
  // add new styles, when you need
};

const GlobalStyles = createGlobalStyle<GlobalStyleProps>`

  * {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
		background: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.mainLight};
    font-size: 1.15em;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
