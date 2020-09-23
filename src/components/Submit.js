import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

import {addVote, setFirebaseData} from '../helpers';
import {VoteContext, DataContext} from './context'
import Error from './Error';
import { useFirebase } from './firebase'

function handleSubmit(firebase, vote) {
  setFirebaseData(firebase, vote);
  console.log('works');
  // addVote(vote);
}

const Submit = () => {
  const [vote] = useContext(VoteContext);
  const [data, setData] = useContext(DataContext);
  const firebase = useFirebase();

  console.log(firebase);
  console.log(vote)
  console.log(data)

  return (
    <>
      {!vote.state ? <Error /> :
        <div>
          <p>{vote && vote.state}</p>
          <p>{vote && vote.candidate}</p>
          <p>{vote && vote.party}</p>
          <button onClick={() => handleSubmit(firebase, vote)}><Link to='/results'>SUBMIT</Link></button>
          <button><Link to='/candidate'>RESET</Link></button>
        </div>
      }
    </>
  )
}

// Submit.propTypes = {

// }

export default Submit
