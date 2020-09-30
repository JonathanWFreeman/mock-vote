import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import {BattlegroundPurple} from '../../Global'
import SvgElement from './SvgElement'
import {Below} from '../utilities'
import {stateSvgs} from '../../stateSvgs'

const StateResults = styled.section`
  position: fixed;
  top: 0;
  background: ${({mapColor}) => mapColor};
  width: 100%;
  padding: 1% 2%;
  border-bottom: 2px solid #FFF;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0 0 20px;
  }
`;

const StateContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: flex-start;
  align-items: center;
  justify-content: flex-start;
  ${Below.small`
    display: none;
  `}
`;

const SvgContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Results = styled.div`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  width: 100%;
  >div {
    margin: 0 4%;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  display: inline-block;
  right: 15px;
  top: 5px;
  cursor: pointer;
  height: 50px;
  width: 50px;
  line-height: 50px;
  z-index: 100;

  :before,
  :after {
    transform: rotate(-45deg);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -25px;
    display: block;
    height: 10px;
    width: 50px;
    background-color: #fff;
    transition: all 0.2s ease-out;
    ${Below.small`
      height: 5px;
      width: 25px;
      margin-left: 0;
    `}
  }

  :after {
    transform: rotate(45deg);
  }

  :hover:before,
  :hover:after {
    transform: rotate(0deg);
  }
`;

const StateData = ({clickedState, setState, db, mapColor}) => {
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
      const sortedValue = Object.entries(value).sort();
      for(const [party, votes] of sortedValue) {
        voteTotals.push(<p key={votesIndex}>{party}: {votes}</p>);
        votesIndex++;
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
    <StateResults mapColor={mapColor[clickedState] ? mapColor[clickedState].fill : BattlegroundPurple}>
      <h2>{stateSvgs[clickedState].name}</h2>
      {db.states[clickedState] && <h3>Total Votes: {db.states[clickedState].total}</h3>}
      <CloseButton onClick={() => setState(null)}></CloseButton>
      <StateContainer>
        <SvgContainer>
          <SvgElement state={clickedState}/>
        </SvgContainer>

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