import React, {useState, useContext, useEffect, useRef} from 'react';
import { useFirebase } from '../firebase'
import styled from 'styled-components';
import USAMap from 'react-usa-map';
import {returnElectoralVotes, mapHandler, returnMapColors, getFirebaseData, setFirebaseData} from '../../helpers';
import {useWindowDimensions, Below, Above, Loader} from '../utilities'
import {StateData, ImageElement} from '../elements'
import {VoteContext} from '../context'
import {DemocratBlue, RepublicanRed} from '../../Global';

function returnImage(ref){
  switch(ref){
    case 'biden':
      return 'joe-biden.jpg';
    case 'trump':
      return 'donald-trump.jpg';
    case 'democrat':
      return 'democrat-logo.png';
    case 'republican':
      return 'republican-logo.png';
    case 'other':
      return 'other-logo.png';
    default:
      break;
  }
}

function returnCandidateResults(db, candidate, color) {
  const element = [];
  Object.entries(db.candidates).forEach(([doc, collection], index) => {
    let el = [];
    let sortedCollection = Object.entries(collection).sort();
    if(doc === candidate){
      sortedCollection.forEach(([key, value], index) => {
        el.push(<h4 key={index}>{key}: {value}</h4>)
      })
      element.push (
        <CandidateBreakdown key={index} color={color}>
          <h3>Votes by Party:</h3>
          {el}
        </CandidateBreakdown>
      )
    }
  })
  return element;
}

function returnPartyResults(db) {
  const element = [];
  Object.entries(db.parties).forEach(([doc, collection], index) => {
    let el = [];
    let sortedCollection = Object.entries(collection).sort();
    sortedCollection.forEach(([key, value], index) => {
      el.push(
        <div key={index}>
          <h3>{key}</h3>
          <ImageElement img={returnImage(key)} alt={`${key}-logo`} />
          <h4>Votes: {value}</h4>
        </div>
        )
    })
    element.push(
        <PartyContainer key={index}>
          {el}
        </PartyContainer>
      )
  })
  return element;
}

const CandidateBreakdown = styled.div`
  margin-top: 4%;
  border-top: 2px solid ${({color}) => color};
  h3{
    margin: 4% 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 50px;
  flex-direction: column;
  padding: 2% 0;
  ${({color, positionLarge}) => `border-${positionLarge}: 2px solid ${color}`};
  ${Below.medium`
    ${({color, positionSmall}) => `border-${positionSmall}: 2px solid ${color}`};
  `}
`;

const PartyContainer = styled.section`
  flex: 1;
  max-width: 33%;
`;

const ResultSection = styled.section`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  margin: 2% 0;
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
  flex-wrap: wrap;
  text-transform: capitalize;
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
          <h2>Total Votes: {db.total.total.total}</h2>
          <CandidateResults>
            <ImageContainer color={DemocratBlue} positionLarge={'right'} positionSmall={'bottom'}>
              <h2>Joe Biden</h2>
              <ImageElement img={'joe-biden.jpg'} alt={'Joe Biden'}></ImageElement>
              <h3>Popular: {db.candidates.biden ? db.candidates.biden.total : '0'}</h3>
              <h3>Electoral: {electoral.biden}</h3>
              {returnCandidateResults(db, 'biden', DemocratBlue)}
            </ImageContainer>
            <ImageContainer color={RepublicanRed} positionLarge={'left'} positionSmall={'top'}>
              <h2>Donald Trump</h2>
              <ImageElement img={'donald-trump.jpg'} alt={'Donald Trump'}></ImageElement>
              <h3>Popular: {db.candidates.trump ? db.candidates.trump.total : '0'}</h3>
              <h3>Electoral: {electoral.trump}</h3>
              {returnCandidateResults(db, 'trump', RepublicanRed)}
            </ImageContainer>
          </CandidateResults>
          {state && state !== 'DC' ? 
            <StateData clickedState={state} setState={setState} db={db} mapColor={mapColor} /> 
          : null}
          <MapSection>
            <h2>State Results</h2>
            <h3>Select a state for more information</h3>
            <USAMap title='US Voting Map' customize={mapColor} onClick={(event) => mapHandler(event, setState)} width={width} height={width / 2.5}/>
          </MapSection>
          <h2>Party Results</h2>
          <h3>Total Votes By Party</h3>
          <BreakdownResults>
            <ResultSection>
              {returnPartyResults(db)}
            </ResultSection>
          </BreakdownResults>
        </>
      }
      {loading && <Loader />}
    </>
  )
}

export default Results
