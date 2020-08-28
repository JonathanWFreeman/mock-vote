import React from 'react'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {db, returnElectoralVotes} from '../helpers';
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

const mapHandler = (event) => {
  alert(event.target.dataset.name);
};

const returnMapColor = (biden, trump) => {
  if(biden > trump) return DemocratBlue;
  if(trump > biden) return RepublicanRed;
  return BattlegroundPurple;
}

const statesCustomConfig = (db) => {
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

const Results = (props, event) => {
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
      <MapSection>
        <USAMap customize={statesCustomConfig(db)} onClick={mapHandler} />
      </MapSection>
    </>
  )
}

// Results.propTypes = {

// }

export default Results
