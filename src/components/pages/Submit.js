import React, {useContext} from 'react'
import styled from 'styled-components'
import {VoteContext, RouteContext} from '../context'
import {Button} from '../elements'
import {returnFullName} from '../../helpers'
import {ImageElement} from '../elements';
import {FlexContainer} from '../utilities';

function handleSubmit(setRoute, route) {
  setRoute(route)
}

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

const ResultWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 50px;
`;

const ButtonContainer = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
  width: 100%
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 50px;
`;

const Submit = () => {
  const [vote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext);

  const candidate = returnFullName(vote.candidate);
  
  return (
    <>
      <h2>Confirm Choices</h2>
      <FlexContainer>
        <ResultWrapper>
          <ResultContainer>
            <h3>Candidate:</h3>
            <h3>{candidate}</h3>
            <ImageContainer>
              <ImageElement img={returnImage(vote.candidate)} alt={candidate}></ImageElement>
            </ImageContainer>
          </ResultContainer>
          <ResultContainer>
            <h3>Party:</h3>
            <h3>{vote.party}</h3>
            <ImageContainer>
              <ImageElement img={returnImage(vote.party)} alt={vote.party}></ImageElement>
            </ImageContainer>
          </ResultContainer>
        </ResultWrapper>
        <ButtonContainer>
          <Button onClick={() => handleSubmit(setRoute, 'results')}>VOTE</Button>
          <Button onClick={() => handleSubmit(setRoute, 'candidate')}>RESET</Button>
        </ButtonContainer>
      </FlexContainer>
    </>
  )
}

export default Submit
