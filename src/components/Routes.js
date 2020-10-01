import React, {useContext, useEffect, useState} from 'react'
import ReactGA from 'react-ga';
import firebase from 'firebase'
import {Candidate, Party, Submit, Error, Results, Login} from './pages'
import {VoteContext, RouteContext} from './context'
import {fetchLocation, Loader} from './utilities'
import { useFirebase } from './firebase'
import {checkUserExists, handleError, wait} from '../helpers'


ReactGA.initialize('UA-28313388-5');

const Routes = () => {
  const firestore = useFirebase();
  const [error, setError] =  useState(false);
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [vote, setVote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext);
  
  async function authenticate(provider) {
    setLoading(true);
    await providerLogin(provider);
    setLoading(false);
  }
  
  async function providerLogin(provider) {
    const authProvider = await new firebase.auth[`${provider}AuthProvider`]();
    await firestore.auth().signInWithPopup(authProvider).then(authHandler).catch(err => handleError(err.message, setError, setRoute));
  }
  
  function authHandler(authData) {
    return new Promise(async (resolve, reject) => {
      if(authData){
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
            if(userLocation.country_code !== 'US'){
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
        resolve();
      }else{
        reject();
      }
    })
  }
  
  useEffect(() => {
    async function doStuff(){
      ReactGA.pageview(route);
      const isUser = localStorage.getItem('uid');
      if(isUser){
        setUserExists(true)
        await wait(3000)
        setUserExists(false)
        setRoute('results')
      }
    }
    doStuff();
  }, [firestore, route, setRoute]);

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
      {route === 'login' && <Login authenticate={authenticate} />}
      {route === 'candidate' && <Candidate />}
      {route === 'party' && <Party />}
      {route === 'submit' && <Submit />}
      {route === 'results' && <Results />}
      {route === 'error' && <Error error={error} />}
      {loading && <Loader />}
    </>
  )
}

export default Routes
