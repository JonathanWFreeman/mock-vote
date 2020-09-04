import React, {useState} from 'react';
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {db} from '../testDb';
import {returnElectoralVotes, mapHandler, statesCustomConfig} from '../helpers';
import {useWindowDimensions, StateData} from './utilities'
// import PropTypes from 'prop-types'

const ResultDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

const MapSection = styled.section`
  margin: 5% 0 0;
  path {
    pointer-events: all;
  }
  path:hover {
    opacity: 0.50;
    cursor: pointer;
  }
  svg {
    width: 100%;
  }
`;

const StateResults = styled.section`
  position: fixed;
  top: 0;
  background: #000;
  width: 100%;
  padding: 1% 2%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #FFF;
`;

const CandidateResults = styled.section`
  display: flex;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Results = (props, event) => {
  
  const [state, setState] = useState('');
  const { width } = useWindowDimensions();
  returnElectoralVotes();

  return (
    <>
      <h2>Results</h2>
      <CandidateResults>
        <div>
          <h2>Popular</h2>
          <ResultDiv>
            <h3>Biden: {db.candidates.biden.total}</h3>
          </ResultDiv>
          <ResultDiv>
            <h3>Trump: {db.candidates.trump.total}</h3>
          </ResultDiv>
        </div>
        <div>
        <h2>Electoral</h2>
          <ResultDiv>
            <h3>Biden: {db.electoralCollege.biden}</h3>
          </ResultDiv>
          <ResultDiv>
            <h3>Trump: {db.electoralCollege.trump}</h3>
          </ResultDiv>
        </div>
      </CandidateResults>
      {state ? 
        <StateResults>
          <StateData clickedState={state} setState={setState} /> 
        </StateResults>
      : null}
      <MapSection>
        <USAMap title='US Voting Map' customize={statesCustomConfig()} onClick={(event) => mapHandler(event, setState)} width={width} height={width / 2.5}/>
      </MapSection>
    </>
  )
}

// Results.propTypes = {

// }

export default Results
