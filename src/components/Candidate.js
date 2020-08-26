import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const FlexContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const CandidateContainer = styled.div`
  ${'' /* width: 50%; */}
`;

const CandidateImage = styled.img`
  transition: .2s;
  filter: grayscale(.4);
  ${'' /* width: 50%; */}
  :hover {
    transform: scale(1.02,1.02);
    filter: grayscale(0);
  }
`;

const Candidate = (props) => {
  return (
    <>
      <h2>Choose your candidate!</h2>
      <FlexContainer>
        <CandidateContainer>
          <h3>Joe Biden</h3>
          <CandidateImage src={require('../images/joe-biden.jpg')} alt=""/>
        </CandidateContainer> 
        <CandidateContainer>
          <h3>Donald Trump</h3>
          <CandidateImage src={require('../images/donald-trump.jpg')} alt=""/>
        </CandidateContainer> 
      </FlexContainer>
    </>
  )
}

// Candidate.propTypes = {

// }

export default Candidate

