import React from 'react'
import styled from 'styled-components';
import { Below } from './utilities/';
// import PropTypes from 'prop-types'

const FlexContainer = styled.section`
  ${Below.small`
    display: block;
  `}
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const PartyContainer = styled.div`
  ${'' /* width: 50%; */}
`;

const PartyLogo = styled.img`
  width: 100%;
  transition: .2s;
  filter: grayscale(.4);
  ${'' /* width: 50%; */}
  :hover {
    transform: scale(1.1,1.1);
    filter: grayscale(0);
  }
`;

const Party = (props) => {
  return (
    <FlexContainer>
    <PartyContainer>
      <h2>Democrat</h2>
      <PartyLogo src={require('../images/democrat-logo.png')} alt=""/>
    </PartyContainer>
    <PartyContainer>
      <h2>Republican</h2>
      <PartyLogo src={require('../images/republican-logo.png')} alt=""/>
    </PartyContainer>
    </FlexContainer>
  )
}

// Party.propTypes = {

// }

export default Party

