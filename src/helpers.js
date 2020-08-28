import {electoralCollege, db} from './testDb';

export function addVote(party, candidate, state) {
  // party
  db.party[party] = db.party[party] + 1 || 1;
  
  // candidate
  db.candidates[candidate][party] = db.candidates[candidate][party] + 1 || 1;
  db.candidates[candidate].total = db.candidates[candidate].total + 1 || 1;
  
  // state
  if(!db.states[state]) {
    db.states[state] = {};
  }
  if(!db.states[state][candidate]) {
    db.states[state][candidate] = {};
  }

  db.states[state][candidate][party] = db.states[state][candidate][party] + 1 || 1;
  db.states[state][candidate].total = db.states[state][candidate].total + 1 || 1;
  db.states[state].total = db.states[state].total + 1 || 1;
  
  // total
  db.total++;
  console.log(db);
}

export function returnElectoralVotes() {
  
  let bidenEV = 0;
  let trumpEV = 0;
  
  for(const [state, value] of Object.entries(db.states)) {
    
    //get state total votes
    const biden = value.biden ? value.biden.total : 0;
    const trump = value.trump ? value.trump.total : 0;
    
    //add EC votes
    if(biden > trump) bidenEV += electoralCollege[state];
    if(trump > biden) trumpEV += electoralCollege[state];
    
    // console.log(state, value);
  }

  //set votes to db
  db.electoralCollege.biden = bidenEV;
  db.electoralCollege.trump = trumpEV;
}