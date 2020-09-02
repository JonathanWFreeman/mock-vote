import { createGlobalStyle } from 'styled-components';
import { Above } from './components/utilities';

export const SiteWidth = '80vw';
export const BackgroundColor = '#333333';
export const RepublicanRed = '#e81b23';
export const DemocratBlue = '#00aef3';
export const BattlegroundPurple = '#9100ff';

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
}



html {
  box-sizing: border-box;
  ${'' /* font-size: 16px; */}
  font-size: calc(10px + 2vmin);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}

*, *:before, *:after {
  box-sizing: inherit;
}

body{
  background-color: ${BackgroundColor};
  color: #FFF;
  ${Above.small`
    font-size: 1.3rem;
  `}
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  line-height: 2rem;
}

h1 {
  font-size: 2rem;
}

h2 {
  margin: 20px 0;
  font-size: 2rem;
}

h3 {
  margin: 20px 0;
  font-size: min(max(1rem, 5vw), 1.5rem);
}

img {
  width: 100%;
}
`;

export default GlobalStyle;
