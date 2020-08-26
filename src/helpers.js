export const db = {
  party: 
    {
      democrat: 1,
      republican: 1,
    },
  candidates: 
    {
      biden: {
        democrat: 1,
      },
      trump: {
        republican: 1,
      },
    },
  states: 
    {
      NY: {
        democrat: 1,
        total: 1,
      },
      TX: {
        republican: 1,
        total: 1,
      }
    },
  total: 2,
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
