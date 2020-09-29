import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StateResults = styled.section`
  position: fixed;
  top: 0;
  background: ${({mapColor}) => mapColor};
  width: 100%;
  padding: 1% 2%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #FFF;
`;

const State = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #FFF;
  border-radius: 50%;
  width: 80px;
  height: 80px; 
`;

const StateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
`;

const Results = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 75vw;
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

const StateData = ({clickedState, setState, db, mapColor}) => {
  const results = [db.states[clickedState]];
  console.log(db)
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
    <StateResults mapColor={mapColor[clickedState].fill}>
      <CloseButton onClick={() => setState(null)}>X</CloseButton>
      <StateContainer>
        <State>{clickedState}</State>
      </StateContainer>
      <Results>
        {returnResults}
      </Results>
    </StateResults>
  );
}

Results.propTypes = {
  clickedState: PropTypes.string,
  setState: PropTypes.string,
  db: PropTypes.object,
}

export default StateData;