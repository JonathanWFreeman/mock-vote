import React, {useContext} from 'react'
import {VoteContext, RouteContext} from './context'
import Error from './Error';

function handleSubmit(setRoute, route) {
  setRoute(route)
}

const Submit = () => {
  const [vote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext);
  
  return (
    <>
      {!vote.state ? <Error /> :
        <div>
          <p>{vote && vote.candidate}</p>
          <p>{vote && vote.party}</p>
          <p>{vote && vote.email}</p>
          <button onClick={() => handleSubmit(setRoute, 'results')}>SUBMIT</button>
          <button onClick={() => handleSubmit(setRoute, 'candidate')}>RESET</button>
        </div>
      }
    </>
  )
}

export default Submit
