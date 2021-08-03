import React, {useContext, useState} from 'react'
import {VoteContext, RouteContext} from '../context'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from '../elements'
import {fetchLocation} from '../utilities'
import {handleError, wait} from '../../helpers'

const Wrapper = styled.section`
  margin: 0 2%;
`;

const Login = ({setError, setLoading}) => {
  const [userExists, setUserExists] = useState(false);
  const [vote, setVote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext); 

  async function authenticate() {
    setLoading(true);
    await checkIfVoted();
    setLoading(false);
  }

  async function checkIfVoted() {
    const voted = localStorage.voted; 
    if(!voted){
      const userLocation = await fetchLocation().catch((err) => handleError(err, setError, setRoute));
      if(userLocation){
        if(userLocation.region_code.length === 0){
          setError('Error getting region data')
          setRoute('error')
        }
        else if(userLocation.country_code !== 'US'){
          setError('US residents only')
          setRoute('error')
        }else{
          setVote(prevVote => ({...prevVote,
            state: userLocation.region_code,
          }));       
          setRoute('candidate')
        }
      }
    } else {
      setUserExists(true)
      await wait(2000)
      setUserExists(false)
      setRoute('results')
    }
  }

  if(userExists) {
    return (
      <>
        <h2>Looks like you've already voted</h2>
        <h2>You'll be redirected to the results shortly</h2>
      </>
    )
  }

  return (
    <>
      <Wrapper>
        <h2>Welcome to Election 2020!</h2>
        <Button onClick={() => authenticate()}><p>Vote</p></Button>
        <Button onClick={() => setRoute('results')}><p>Results</p></Button>
      </Wrapper>
    </>
  )
}

Login.propTypes = {
  setError: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
}

export default Login