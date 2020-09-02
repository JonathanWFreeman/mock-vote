import React from 'react';
import GlobalStyle from './Global';
import styled from 'styled-components';

import {addVote} from './helpers';
import {Header} from './components/elements'
import Candidate from './components/Candidate'
import Party from './components/Party'
import Results from './components/Results'

const Content = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
  align-content: center;
	justify-content: center;
  padding: 0 5%;
`;

const Wrapper = styled.section`
  text-align: center;
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */}
  /* font-size: calc(10px + 2vmin); */
`;

const App = () => {
  addVote('republican', 'trump', 'TX');
  addVote('republican', 'biden', 'OK');
  addVote('democrat', 'biden', 'OK');
  addVote('republican', 'trump', 'OK');
  addVote('democrat', 'trump', 'FL');
  addVote('democrat', 'trump', 'FL');
  addVote('democrat', 'biden', 'OK');
  addVote('democrat', 'biden', 'CA');

  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Candidate />
          {/* <Party /> */}
          {/* <Results /> */}
        </Content>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
