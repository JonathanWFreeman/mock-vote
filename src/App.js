import React from 'react';
import './App.css';
import GlobalStyle from './Global';

import {addVote} from './helpers';
import Header from './components/elements/Header'
import Candidate from './components/Candidate'
import Party from './components/Party'
import Results from './components/Results'


const App = () => {
  addVote('republican', 'trump', 'texas');
  addVote('democrat', 'biden', 'oklahoma');

  return (
    <>
      <div className="app">
          <Header />
          <section className="content">
            <Candidate />
            <Party />
            <Results />
          </section>
        </div>
      <GlobalStyle />
    </>
  );
}

export default App;
