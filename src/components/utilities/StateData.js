import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import {db} from '../../testDb';

const State = styled.p`
  border: 3px solid #FFF;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  max-width: 10vw;
  max-height: 10vw;
`;

const Results = styled.div`
  text-transform: capitalize;
  display: flex;
  width: 100%;
  justify-content: center;
  div:first-child {
    margin: 0 4%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  right: 15px;
  top: 5px;
  cursor: pointer;
`;

const StateData = ({clickedState, setState}) => {
  const results = [db.states[clickedState]];
  const returnResults = [];
  let voteTotals = [];
  let resultsIndex = 0;
  let votesIndex = 0;

 if(clickedState === 'DC'){
    return null;
  } else if(results[0] === undefined) {
    returnResults.push(<p key={resultsIndex}>No votes yet.</p>)
  } else {
    for(const [candidate, value] of Object.entries(results[0])) {
      for(const [party, votes] of Object.entries(value)) {
        if(party !== 'total'){
          voteTotals.push(<p key={votesIndex}>{party}: {votes}</p>);
          votesIndex++;
        }
      }
      if(candidate !== 'total') {
        returnResults.push(
          <div key={resultsIndex}>
            <h4>{candidate}</h4>
            <div>{voteTotals}</div>
          </div>
        );
        resultsIndex++;
        voteTotals = [];
      }
    };
  }
 
  return(
    <>
      <CloseButton onClick={() => setState(null)}>X</CloseButton>
      <State>{clickedState}</State>
      <Results>
        {returnResults}
      </Results>
    </>
  );
}

Results.propTypes = {
  clickedState: PropTypes.string,
  setState: PropTypes.string,
}

export default StateData;