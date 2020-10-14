import React, {useContext, useEffect, useState} from 'react'
import ReactGA from 'react-ga';
import {Candidate, Party, Submit, Error, Results, Login} from './pages'
import {RouteContext} from './context'
import {Loader} from './utilities'

ReactGA.initialize('UA-28313388-5');

const Routes = () => {
  const [error, setError] =  useState(false);
  const [loading, setLoading] = useState(false);
  const [route, setRoute] = useContext(RouteContext); 
  window.scrollTo(0, 0);
  
  ReactGA.pageview(route);
   
  return (
    <> 
      {route === 'login' && <Login setError={setError} setLoading={setLoading} />}
      {route === 'candidate' && <Candidate />}
      {route === 'party' && <Party />}
      {route === 'submit' && <Submit />}
      {route === 'results' && <Results setError={setError} setLoading={setLoading} />}
      {route === 'error' && <Error error={error} />}
      {loading && <Loader />}
    </>
  )
}

export default Routes
