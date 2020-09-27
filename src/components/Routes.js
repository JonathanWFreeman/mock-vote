import React, {useContext, useEffect, useState} from 'react'
import firebase from 'firebase'
import {Candidate, Party, Submit, Error, Results, Login} from './pages'
import {VoteContext, RouteContext} from './context'
import {setLocation} from './utilities'
import { useFirebase } from './firebase';
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));

function checkUserExists(firestore, setUserExists, userEmail) {
  return new Promise((resolve, reject) => {
    firestore.users().where('email', '==', userEmail).get()
    .then(function(ref) {
      ref.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          setUserExists(true);
          resolve(true);
        });
        resolve(false);
    }).catch(err => {
      console.error(err);
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

  function authHandler(authData) {
    // Check if email is in db, if not set email (during submit phase)
    // set local storage
    const getUserId = authData.user.uid;
    const getUserEmail = authData.user.email;
    // If no email, continue, if email stop
    console.log(authData);
    // console.log(getUser);
    setVote(prevVote => ({...prevVote, uid: getUserId, email: getUserEmail}))
  }
  
  async function authenticate(provider) {
    
    const isUser = await checkUserExists(firestore, setUserExists, 'knokaoutz@gmail.com');
    // await wait(1000)
    if(isUser){
      setRoute('candidate')
    }else{
      providerLogin(provider, firestore, authHandler)
    }
    // Handle route change if logged in etc
  }
  // SET USER INTO VOTE CONTEXT - CAUSE OF BREAKING DURING SUBMISSION
  
  useEffect(() => {
    async function doStuff(){
      await setLocation(setVote, setErr, setCountry);
      // const isUser = await checkUserExists(firestore, setUserExists, 'knokoutz@gmail.com'); 
      // if(isUser){
      //   setRoute('candidate')
      // }
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
