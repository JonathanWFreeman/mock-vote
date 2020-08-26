import React from 'react'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {db} from '../helpers';
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

const returnVote = (demo, rep) => {

  if(demo === undefined) demo = 0;
  if(rep === undefined) rep = 0;


  if(demo > rep) return DemocratBlue;
  if(rep > demo) return RepublicanRed;
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

  for(const [state, value] of Object.entries(db.states)) {
    const demo = value.democrat;
    const rep = value.republican;

    map[state] = {
      fill: returnVote(demo, rep),
    };
  }

  return map;
};

const Results = (props, event) => {
  return (
    <>
      <section>
          <h2>Candidate</h2>
        <ResultDiv>
          <h3>Biden: </h3>
          <p>50%</p>
        </ResultDiv>
        <ResultDiv>
          <h3>Trump: </h3>
          <p>50%</p>
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
