import React, {useState} from 'react'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {db} from '../testDb';
import {returnElectoralVotes} from '../helpers';
import {RepublicanRed, DemocratBlue, BattlegroundPurple} from '../Global';
// import PropTypes from 'prop-types'

const ResultDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

const MapSection = styled.section`
  path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.50;
    cursor: pointer;
  }
`;

const mapHandler = (event, setState) => {
  const state = event.target.dataset.name;
  setState(state);
};

const returnMapColor = (biden, trump) => {
  if(biden > trump) return DemocratBlue;
  if(trump > biden) return RepublicanRed;
  return BattlegroundPurple;
}

const statesCustomConfig = () => {
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

const StateData = ({clickedState}) => {
  const results = [db.states[clickedState]];
  console.log(clickedState);
  const items = [];
  let index = 0;

 if(clickedState === 'DC'){
    return null;
  } else if(results[0] === undefined) {
    items.push(<p key={index}>No votes yet.</p>)
  } else {
    for(const [candidate, value] of Object.entries(results[0])) {
      // console.log(candidate + ':')
      if(candidate !== 'total') items.push(<h4 key={index}>{candidate}</h4>);
      index++;
      for(const [party, votes] of Object.entries(value)) {
        // console.log(party + ':' + votes);
        if(party !== 'total') items.push(<p key={index}>{party}: {votes}</p>);
        index++;
      }
    };
  }

  
  return(
    <>
      <div>{clickedState}</div>
      <div style={{textTransform: 'capitalize'}}>
        {items.length === 0 ? 
          <p>None</p>:items}
      </div>
    </>
  );
}

const Results = (props, event) => {
  
  const [state, setState] = useState('');

  returnElectoralVotes();

  return (
    <>
      <section>
        <h2>Results</h2>
        <h2>Popular</h2>
        <ResultDiv>
          <h3>Biden:</h3>
          <p>{db.candidates.biden.total}</p>
        </ResultDiv>
        <ResultDiv>
          <h3>Trump:</h3>
          <p>{db.candidates.trump.total}</p>
        </ResultDiv>
      </section>
      <section>
      <h2>Electoral</h2>
      <p>(270 to win)</p>
        <ResultDiv>
          <h3>Biden:</h3>
          <p>{db.electoralCollege.biden}</p>
        </ResultDiv>
        <ResultDiv>
          <h3>Trump:</h3>
          <p>{db.electoralCollege.trump}</p>
        </ResultDiv>
      </section>
      <section>
        {state ? <StateData clickedState={state} /> : null}
      </section>
      <MapSection>
        <USAMap title='US Voting Map' customize={statesCustomConfig()} onClick={(event) => mapHandler(event, setState)} />
      </MapSection>
    </>
  )
}

// Results.propTypes = {

// }

export default Results
