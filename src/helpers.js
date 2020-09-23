import {electoralCollege} from './testDb';
import {RepublicanRed, DemocratBlue, BattlegroundPurple} from './Global';

export async function setFirebaseData(firebase, {party, candidate, state}) {
  const parties = firebase.parties().doc(party);
  const candidates = firebase.candidates().doc(candidate);
  const states = firebase.states().doc(state);
  const total = firebase.total().doc('total');
  const batch = firebase.db.batch();

  // const fb = firebase.db.collection('test').doc('test');
  // fb.update({test2: firebase.increment()})
  // console.log(fb);
  
  
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
    }
    setDb(prev => ({...prev, [ref]: arr}));
    arr = {}
  })
}

export function returnElectoralVotes(db) {
  let bidenVotes = 0;
  let trumpVotes = 0;

  if(db.states){  
    for(const [state, value] of Object.entries(db.states)) {
      
      //get state total votes
      const biden = value.biden ? value.biden.total : 0;
      const trump = value.trump ? value.trump.total : 0;

      //add EC votes
      if(biden > trump) bidenVotes += electoralCollege[state];
      if(trump > biden) trumpVotes += electoralCollege[state];
    }

    //set votes to db
    return {biden: bidenVotes, trump: trumpVotes};
  }
}
export const mapHandler = (event, setState) => {
  const state = event.target.dataset.name;
  setState(state);
};

const returnMapColor = (biden, trump) => {
  if(biden > trump) return DemocratBlue;
  if(trump > biden) return RepublicanRed;
  return BattlegroundPurple;
}

export const statesCustomConfig = (db) => {
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
  for(const [state, value] of Object.entries(db.states)) {

    const biden = value.biden ? value.biden.total : 0;
    const trump = value.trump ? value.trump.total : 0;
    
    map[state] = {
      fill: returnMapColor(biden, trump),
    };
  }
  
  return map;
};

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}