import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

import {addVote} from '../helpers';
import {VoteContext, DataContext} from './context'

function handleSubmit(data, vote) {
  addVote(vote);
  console.log('works');
  console.log(data);
}

const Submit = () => {
  const [vote] = useContext(VoteContext);
  const [data, setData] = useContext(DataContext);
  console.log(vote)
  console.log(data)
  return (
    <div>
      <p>{vote && vote.state}</p>
      <p>{vote && vote.candidate}</p>
      <p>{vote && vote.party}</p>
      <button onClick={() => handleSubmit(data, vote)}><Link to='/results'>SUBMIT</Link></button>
      <button><Link to='/candidate'>RESET</Link></button>
    </div>
  )
}

// Submit.propTypes = {

// }

export default Submit
