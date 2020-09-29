import {RepublicanRed, DemocratBlue, BattlegroundPurple} from './Global';

export async function setFirebaseData(firebase, {party, candidate, state, uid, email, name}) {
  const parties = firebase.parties().doc(party);
  const candidates = firebase.candidates().doc(candidate);
  const states = firebase.states().doc(state);
  const total = firebase.total().doc('total');
  const user = firebase.users().doc(uid);
  const batch = firebase.db.batch();

  // const fb = firebase.db.collection('test').doc('test');
  // fb.update({test2: firebase.increment()})
  // console.log(fb);
  console.log(email);  
  
  // party
  batch.set(parties, {[party]: firebase.increment()}, {merge:true})
  
  // candidate
  batch.set(candidates, {
    [party]: firebase.increment(),
    total: firebase.increment()
    }, {merge:true})
  
  // state
  batch.set(states, {
    [candidate]: {
      [party]: firebase.increment(),
      total: firebase.increment(),
    },
    total: firebase.increment()
  }, {merge:true})
  
  // total
  batch.set(total, {total: firebase.increment()}, {merge:true})
  // batch.set(ec, electoralCollege)

  // user
  batch.set(user, {
    email,
    uid,
    name,
    state,
    candidate,
    party,
  })

  // batch
  try{
    await batch.commit();
  }catch(err){
    console.log(err);
    // setErr(true)
  }
}

export async function getFirebaseData(firebase, type, setDb) {
  let arr = {}
  type.forEach(async ref => {
    const getData = await firebase[ref]().get();
    for(let doc of getData.docs){
      arr[doc.id] = doc.data()
      console.log(arr);
    }
    setDb(prev => ({...prev, [ref]: arr}));
    arr = {}
  })
}

export function returnElectoralVotes(db) {
  let bidenVotes = 0;
  let trumpVotes = 0;

  if(db.states && db.electoralCollege){  
    
    for(const [state, value] of Object.entries(db.states)) {
      
      //get state total votes
      const biden = value.biden ? value.biden.total : 0;
      const trump = value.trump ? value.trump.total : 0;

      //add EC votes
      if(biden > trump) bidenVotes += db.electoralCollege.states[state];
      if(trump > biden) trumpVotes += db.electoralCollege.states[state];
    }

    //set votes to db
    return {biden: bidenVotes, trump: trumpVotes};
  }
}

export const mapHandler = (event, setState) => {
  const state = event.target.dataset.name;
  setState(state);
};

const getMapColor = (biden, trump) => {
  if(biden > trump) return DemocratBlue;
  if(trump > biden) return RepublicanRed;
  return BattlegroundPurple;
}

export function returnMapColors(db) {
  let map = {
    // NJ: {
    //   fill: "navy",
    //   clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
    // },
    // NY: {
    //   fill: "#CC0000"
    // }
  };

  // loop through states
  if(db.states) {
    for(const [state, value] of Object.entries(db.states)) {

      const biden = value.biden ? value.biden.total : 0;
      const trump = value.trump ? value.trump.total : 0;
      
      map[state] = {
        fill: getMapColor(biden, trump),
      };
    }
    
    return map;
  }
};

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export function handleError(err, setError, setRoute) {
  setError(err.toString())
  setRoute('error')
}

export function checkUserExists(firestore, uid) {
  return new Promise((resolve, reject) => {
    firestore.users().where('uid', '==', uid).get()
    .then(function(ref) {
      ref.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        console.log('in doc');
      });
      console.log(ref.empty);
      ref.empty ? reject(false) : resolve(true);
      // User not returned
      // console.log(ref);
    }).catch(err => {
      console.log(err);
    });
    
  })
}

export function returnFullName(name) {
  return name === 'biden' ? 'Joe Biden' : 'Donald Trump';
}