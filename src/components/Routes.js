import React, {useContext, useEffect, useState} from 'react'

import Candidate from './Candidate'
import Party from './Party'
import Submit from './Submit'
import {VoteContext, RouteContext} from './context'
import {setLocation} from './utilities'
import Error from './Error';
import Results from './Results';
import Login from './Login'
import firebase from 'firebase'
import { useFirebase } from './firebase';

function checkUserExists(firestore, setUserExists, userEmail) {
  return new Promise((resolve, reject) => {
    firestore.users().where('email', '==', userEmail).get()
    .then(function(ref) {
      ref.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          setUserExists(true);
        });
        resolve();
    }).catch(err => {
      console.error("Error writing document: ", err);
      reject();
    });
  })
}

function providerLogin(provider, firestore, authHandler) {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();
  firestore.auth().signInWithPopup(authProvider).then(authHandler);
}

const Routes = () => {
  const [vote, setVote] = useContext(VoteContext);
  const [country, setCountry] = useState(null);
  const [err, setErr] =  useState(false);
  const firestore = useFirebase();
  const [userExists, setUserExists] = useState(false);
  const [route, setRoute] = useContext(RouteContext)

  const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
  async function authHandler(authData) {
    // Check if email is in db, if not set email (during submit phase)
    // set local storage
    const getUserId = await authData.user.uid;
    const getUserEmail = await authData.user.email;
    // If no email, continue, if email stop
    console.log(authData);
    // console.log(getUser);
    setVote(prevVote => ({...prevVote, uid: getUserId, email: getUserEmail}))
  }
  
  async function authenticate(provider) {
    
    const checkUser = await checkUserExists(firestore, setUserExists, 'knokoutz@gmail.com');
    // await wait(1000)
    console.log(checkUser);
    if(!checkUser){
      console.log(checkUser);
      providerLogin(provider, firestore, authHandler)
    }
    // Handle route change if logged in etc
    // authHandler();
  }
  // SET USER INTO VOTE CONTEXT - CAUSE OF BREAKING
  
  useEffect(() => {
    async function doStuff(){
    await setLocation(setVote, setErr, setCountry);
    await checkUserExists(firestore, setUserExists, 'knokoutz@gmail.com'); 
    if(userExists){
      // history.push('/candidate');
      setRoute('candidate')
    }
  }
  doStuff();
  }, [firestore, setRoute, setVote, userExists]);


  return (
    <> 
      {route === 'login' && <Login authenticate={authenticate} />}
      {route === 'candidate' && <Candidate />}
      {route === 'party' && <Party />}
      {route === 'submit' && <Submit />}
      {route === 'results' && <Results />}
      {route === 'error' && <Error country={country} />}
      {/* {route === 'loading' && <Loading country={country} />} */}
    </>
  )
}

export default Routes
