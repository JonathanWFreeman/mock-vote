import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { Above } from './components/utilities';

export const SiteWidth = '80vw';
export const BackgroundColor = '#333333';
export const PrimaryColor = '#03E9F4';
export const SecondaryColor = '#FF0700';
export const AltColor = '#1B5AF7';

const GlobalStyle = createGlobalStyle`
${'' /* ${normalize}; */}

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
  font-size: 2.5rem;
}

h2 {
  margin: 40px 0;
  font-size: 2rem;
}

h3 {
  margin: 40px 0;
  font-size: min(max(1rem, 5vw), 2rem);
}

img {
  width: 100%;
}
`;

export default GlobalStyle;
