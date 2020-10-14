import React, {useContext, useEffect, useState} from 'react'
import firebase from 'firebase'
import { useFirebase } from '../firebase'
import {VoteContext, RouteContext} from '../context'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from '../elements'
import {fetchLocation, Below} from '../utilities'
import {handleError, wait} from '../../helpers'

const Wrapper = styled.section`
  margin: 0 2%;
`;

const Disclaimer = styled.div`
  padding: 25px;
  position: absolute;
  bottom: 0;
  ${Below.small`
    position: initial;
  `}
`;

const Login = ({setError, setLoading}) => {
  const firestore = useFirebase();
  const [userExists, setUserExists] = useState(false);
  const [vote, setVote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext); 

  async function authenticate(provider) {
    setLoading(true);
    await providerLogin(provider);
    setLoading(false);
  }
  
  async function providerLogin(provider) {
    const authProvider = await new firebase.auth[`${provider}AuthProvider`]();
    await firestore.auth().signInWithRedirect(authProvider).catch(err => handleError(err.message, setError, setRoute));
    await firestore.auth().getRedirectResult().then(res => console.log(res)).catch(err => handleError(err.message, setError, setRoute));
  }

  useEffect(() => {
    function checkUserExists(firestore, uid) {
      return new Promise((resolve, reject) => {
        firestore.users().where('uid', '==', uid).get()
        .then(function(ref) {
          ref.empty ? reject('User has not voted') : resolve(true);
        }).catch((err) => handleError(err, setError, setRoute));   
      })
    } 
    
    async function authHandler(authData) {
      if(authData.user !== null){
        const getUserId = authData.user.uid;
        const getUserEmail = authData.user.email;          
        const isUser = await checkUserExists(firestore, getUserId).catch((err) => console.log(err));

        if(isUser === true){
          setUserExists(true)
          await wait(3000)
          setRoute('results')
          localStorage.setItem('uid', getUserId);
          setUserExists(false)
        }else{
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
                uid: getUserId,
                email: getUserEmail,
              }));       
              setRoute('candidate')
            }
          }
        }
      }
    }
    async function doStuff(){
      setLoading(true);
      await firestore.auth().getRedirectResult().then(authHandler).catch((err) => handleError(err, setError, setRoute));
      const isUser = localStorage.getItem('uid');
      if(isUser){
        setUserExists(true)
        await wait(2000)
        setUserExists(false)
        setRoute('results')
      }
      setLoading(false);
    }
    doStuff();
  }, [firestore, setError, setLoading, setRoute, setVote]);

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
        <h3>Please login via Facebook to cast your vote!</h3>
        <Button onClick={() => authenticate('Facebook')}><p>Login with Facebook</p></Button>
        <Disclaimer>
          <p>Facebook is only used to help prevent multiple votes being cast.</p>
          <p>No personal information is kept.</p>
        </Disclaimer>
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