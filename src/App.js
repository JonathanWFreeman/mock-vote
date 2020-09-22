import React from 'react';
import GlobalStyle from './Global';
import styled from 'styled-components';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import {addVote} from './helpers';
import {Header} from './components/elements'
import Routes from './components/Routes';
import Results from './components/Results'
import {Context} from './components/context'

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
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  ${'' /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */}
  /* font-size: calc(10px + 2vmin); */
`;

// TODO: Put DB in state
// TODO: Add submission / reset
// TODO: Add routing
// TODO: Add vote to state
// TODO: Maybe add confirmation?

const App = () => {
  // addVote({state: 'TX', candidate: 'trump', party: 'republican'});
  // addVote({party: 'republican', candidate: 'trump', state: 'TX'});
  // addVote({party: 'republican', candidate: 'biden', state: 'OK'});
  // addVote({party: 'democrat', candidate: 'biden', state: 'OK'});
  // addVote({party: 'republican', candidate: 'trump', state: 'OK'});
  // addVote({party: 'democrat', candidate: 'trump', state: 'FL'});
  // addVote({party: 'democrat', candidate: 'trump', state: 'FL'});
  // addVote({party: 'democrat', candidate: 'biden', state: 'OK'});
  // addVote({party: 'democrat', candidate: 'biden', state: 'CA'});
  
  
  return (
    <>
      <Wrapper>
        <Header />
        <Content>
          <Router>
            <Route exact path='/' component={Routes} />
          </Router>
        </Content>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
