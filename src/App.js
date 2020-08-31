import React from 'react';
import GlobalStyle from './Global';

import {addVote} from './helpers';
import {Header} from './components/elements'
import Candidate from './components/Candidate'
import Party from './components/Party'
import Results from './components/Results'


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
      <div className="app">
          <Header />
          <section className="content">
            <Candidate />
            {/* <Party /> */}
            {/* <Results /> */}
          </section>
        </div>
      <GlobalStyle />
    </>
  );
}

export default App;
