import React, {useState, useContext, useEffect, useRef} from 'react';
import { useFirebase } from '../firebase'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {returnElectoralVotes, mapHandler, returnMapColors, getFirebaseData, setFirebaseData} from '../../helpers';
import {useWindowDimensions, Below, Loader} from '../utilities'
import {StateData} from '../elements'
import {VoteContext} from '../context'

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
  const firebase = useFirebase();
  const [db, setDb] = useState({});
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(true);
  const [vote] = useContext(VoteContext);
  const {current:type} = useRef(['parties', 'candidates', 'states', 'total', 'electoralCollege'])
  const { width } = useWindowDimensions();
  
  useEffect(() => {
    async function doStuff(){
      if(vote){
        await setFirebaseData(firebase, vote).catch(err => console.log(err));
        localStorage.setItem('uid', vote.uid);
      }
      await getFirebaseData(firebase, type, setDb).catch(err => console.log(err));
      setLoading(false);
    }
    doStuff();
  }, [firebase, type, vote])

  const electoral = returnElectoralVotes(db);
  const mapColor = returnMapColors(db);

  return (
    <>
      {db.electoralCollege &&
        <>
          <h2>US Results</h2>
          <CandidateResults>
            <div>
              <h2>Popular</h2>
              <ResultDiv>
                <h3>Biden: {db.candidates.biden ? db.candidates.biden.total : '0'}</h3>
              </ResultDiv>
              <ResultDiv>
                <h3>Trump: {db.candidates.trump ? db.candidates.trump.total : '0'}</h3>
              </ResultDiv>
            </div>
            <div>
            <h2>Electoral</h2>
              <ResultDiv>
                <h3>Biden: {electoral.biden}</h3>
              </ResultDiv>
              <ResultDiv>
                <h3>Trump: {electoral.trump}</h3>
              </ResultDiv>
            </div>
          </CandidateResults>
          {state && state !== 'DC' ? 
            <StateData clickedState={state} setState={setState} db={db} mapColor={mapColor} /> 
          : null}
          <MapSection>
            <h2>State Results</h2>
            <h3>Select a state for more information</h3>
            <USAMap title='US Voting Map' customize={mapColor} onClick={(event) => mapHandler(event, setState)} width={width} height={width / 2.5}/>
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
      {loading && <Loader />}
    </>
  )
}

export default Results
