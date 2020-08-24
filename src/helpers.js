const db = {
  party: 
    {
    },
  candidates: 
    {
      biden: {
      },
      trump: {
      },
    },
  states: 
    {
    },
  total: 0,
}

export function addVote(party, candidate, state) {
  // party
  db.party[party] = db.party[party] + 1 || 1;
  
  // candidate
  db.candidates[candidate][party] = db.candidates[candidate][party] + 1 || 1;
  
  // state
  if(!db.states[state]) {
    db.states[state] = {};
  }
  db.states[state][party] = db.states[state][party] + 1 || 1;
  db.states[state].total = db.states[state].total + 1 || 1;
  
  // total
  db.total++;
  console.log(db);
}

// const pf = ['democrat', 'republican', 'moderate', 'other'];
