import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import { getFirebaseData, isEmpty, returnElectoralVotes } from '../helpers'
import { useFirebase } from './firebase'

const Login = () => {
  // const [data, setData] = useState('');
  // const firebase = useFirebase();
  // const {current:type} = useRef(['parties', 'candidates', 'states', 'total'])
  // useEffect(() => {
  //   type.forEach(ref => {
  //     getFirebaseData(firebase, setData, ref);
  //   })
  // }, [firebase, type])

  // console.log(data);
  // console.log(data.candidates);
  const [db, setDb] = useState({});
  const firebase = useFirebase();
  const [done, setDone] = useState(true);
  const {current:type} = useRef(['parties', 'candidates', 'states', 'total'])
  // useEffect(() => {
  //   if(isEmpty(db)) {
  //     getData();
  //   }
  //   async function getData() {  
  //     type.forEach(async ref => {
  //       await getFirebaseData(firebase, ref, setDb);
  //     })
  //     setDone(true)
  //   }
  // }, [db, firebase, type])
  // const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
  // useEffect(() => {
  //   async function bleh(){
  //     await getFirebaseData(firebase, type, setDb);
  //     await returnElectoralVotes(db);
  //     await wait(1000)
  //     setDone(true);
  // }
  // bleh();
  // }, [db, firebase, type])
  // console.log(db);

  // if(!isEmpty(db)) return(<p>Loading</p>)

  return (
      <>
        {done &&
          <>
            <Link to='/candidate'><p>Login</p></Link>
            {/* <p>{db.candidates.biden.total}</p> */}
          </>
        }
      </>
  )
}

export default Login