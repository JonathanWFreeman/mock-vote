import React, {useContext} from 'react'
// import PropTypes from 'prop-types'

import {addVote, setFirebaseData} from '../helpers';
import {VoteContext, RouteContext} from './context'
import Error from './Error';
import { useFirebase } from './firebase'

function handleSubmit(setRoute, route) {
  // setFirebaseData(firebase, vote);
  console.log('works');
  setRoute(route)
  // addVote(vote);
}

const Submit = () => {
  const [vote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext);
  // const [data, setData] = useContext(DataContext);
  // const firebase = useFirebase();

  // console.log(firebase);
  // console.log(vote)
  // console.log(data)

  return (
    <>
      {!vote.state ? <Error /> :
        <div>
          <p>{vote && vote.candidate}</p>
          <p>{vote && vote.party}</p>
          <p>{vote && vote.email}</p>
          <button onClick={() => handleSubmit(setRoute, 'results')}>SUBMIT</button>
          <button onClick={() => handleSubmit(setRoute, 'candidates')}>RESET</button>
        </div>
      }
    </>
  )
}

// Submit.propTypes = {

// }

export default Submit
