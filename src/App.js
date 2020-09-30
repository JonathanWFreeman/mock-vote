import React from 'react';
import GlobalStyle, {BackgroundColor} from './Global';
import styled from 'styled-components';
import {Header} from './components/elements'
import Routes from './components/Routes';
import ReactGA from 'react-ga';

const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
  align-content: center;
	justify-content: center;
  padding: 3% 5%;
  min-height: 90vh;
`;

const Wrapper = styled.section`
  text-align: center;
  background-color: ${BackgroundColor}f0;
  color: #FFF;
  min-height: 100vh;
`;

const App = () => {
  ReactGA.initialize('UA-28313388-5');
  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Routes />
        </Content>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
