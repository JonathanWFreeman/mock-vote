import React, {useState, useContext, useEffect, useRef} from 'react';
import { useFirebase } from '../firebase'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {returnElectoralVotes, mapHandler, statesCustomConfig, getFirebaseData, setFirebaseData} from '../../helpers';
import {useWindowDimensions, Below} from '../utilities'
import {StateData} from '../elements'
import {VoteContext} from '../context'
// import PropTypes from 'prop-types'

const ResultDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
`;

const MapSection = styled.section`
  margin: 5% 0;
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
  h3 {
    margin-bottom: 2%;
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
  justify-content: space-evenly;
  width: 100%;
`;

const BreakdownResults = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;
  text-transform: capitalize;
  div {
    margin: 1% 0;
    ${Below.small`
      display: block;
    `}
  }
`;



const Results = () => {
  // const [db, setDb] = useContext(DataContext);
  const [state, setState] = useState('');
  const [mapColor, setMapColor] = useState({});
  const { width } = useWindowDimensions();
  // write async function wait for data - loader
  
  const [db, setDb] = useState({});
  const firebase = useFirebase();
  const {current:type} = useRef(['parties', 'candidates', 'states', 'total', 'electoralCollege'])
  
  const [vote] = useContext(VoteContext);

  useEffect(() => {
    async function doStuff(){
      console.log(firebase);
      console.log(vote);
      if(vote){
        await setFirebaseData(firebase, vote).catch(err => console.log(err));
      }
      await getFirebaseData(firebase, type, setDb).catch(err => console.log(err));
    }
    doStuff();
  }, [firebase, type, vote])
  const ec = returnElectoralVotes(db);

  return (
    <>
      {db.electoralCollege &&
        <>
          <h2>US Results</h2>
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
                <h3>Biden: {ec.biden}</h3>
              </ResultDiv>
              <ResultDiv>
                <h3>Trump: {ec.trump}</h3>
              </ResultDiv>
            </div>
          </CandidateResults>
          {state && state !== 'DC' ? 
            <StateResults>
              <StateData clickedState={state} setState={setState} db={db} /> 
            </StateResults>
          : null}
          <MapSection>
            <h2>State Results</h2>
            <h3>Select a state for more information</h3>
            <USAMap title='US Voting Map' customize={statesCustomConfig(db)} onClick={(event) => mapHandler(event, setState)} width={width} height={width / 2.5}/>
          </MapSection>
          <h2>Results Breakdown</h2>
          <BreakdownResults>
            <ResultDiv>
                {Object.entries(db.parties).map(([doc, collection], index) => {
                  let el = [];
                  let sortedCollection = Object.entries(collection).sort();
                  sortedCollection.forEach(([key, value], index) => {
                    el.push(<h3 key={index}>{key}: {value}</h3>)
                  })
                  return (
                      <div key={index}>
                        {el}
                      </div>
                    )
                })}
              </ResultDiv>
              <ResultDiv>
                {Object.entries(db.candidates).map(([doc, collection], index) => {
                  let el = [];
                  let sortedCollection = Object.entries(collection).sort();
                  sortedCollection.forEach(([key, value], index) => {
                    el.push(<p key={index}>{key}: {value}</p>)
                  })
                  return (
                      <div key={index}>
                        <h2>{doc}:</h2>
                        <div>{el}</div>
                      </div>
                    )
                })}
              </ResultDiv>
          </BreakdownResults>
        </>
      }
    </>
  )
}

// Results.propTypes = {

// }

export default Results
