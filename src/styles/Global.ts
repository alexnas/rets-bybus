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

	h2 {
		font-size: 28px;
		font-weight: 600;
		text-align: left;
		padding: 20px 0 0 0;
	}
	
	h3 {
		font-size: 18px;
		font-weight: 600;
		color: #fff;
		text-align: left;
		padding: 5px 0 10px 0;
	}

		h4 {
		font-size: 22px;
		font-weight: 400;
		text-align: left;
		padding: 5px 0 10px 0;
	}

	ul {
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
