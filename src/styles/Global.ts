import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
		margin: 0;
		padding: 0;
    box-sizing: border-box;
  }

  body {
    background: hsl(81deg 54% 39% / 10%);
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
    margin: 0;
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
