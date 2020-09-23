import React, {useContext, useEffect, useState} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Candidate from './Candidate'
import Party from './Party'
import Submit from './Submit'
import {VoteContext} from './context'
import {setLocation} from './utilities'
import Error from './Error';
import Results from './Results';
import Login from './Login'

const Questions = () => {
  const [vote, setVote] = useContext(VoteContext);
  const [country, setCountry] = useState(null);
  const [err, setErr] =  useState(false);

  useEffect(() => {
    setLocation(setVote, setErr, setCountry);
  }, [setErr, setVote]);
  return (
    <>
      {
        err ? <Error country={country} /> :
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/candidate' component={Candidate}/>
          <Route path='/party' component={Party}/>
          <Route path='/submit' component={Submit}/>
          <Route path='/results' component={Results}/>
          {/* <Route path='/' component={Results}/> */}
          {/* <Candidate />
          <Party />
          <Submit /> */}
        </Router>
      }
    </>
  )
}

export default Questions
