import { createGlobalStyle } from 'styled-components';
import { Above } from './components/utilities';

export const SiteWidth = '80vw';
export const BackgroundColor = '#282c34';
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
    font-size: calc(10px + 1.5vmin);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${require('./images/flag.jpg')});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #FFF;
    ${Above.small`
      font-size: 1.5rem;
    `}
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    line-height: 2rem;
    font-size: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    margin: 0 0 20px;
    font-size: 2rem;
  }

  h3 {
    ${'' /* margin: 20px 0; */}
    ${'' /* font-size: min(max(1rem, 5vw), 1.5rem); */}
    font-size: 1.5rem;
  }

  h4 {
    ${'' /* margin: 20px 0; */}
    ${'' /* font-size: min(max(1rem, 5vw), 1.5rem); */}
    font-size: 1.2rem;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export default GlobalStyle;