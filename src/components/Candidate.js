import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

import {ImageElement} from './elements';
import {DemocratBlue, RepublicanRed} from '../Global';

const FlexContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Candidate = (props) => {
  return (
    <>
      <h2>Choose your candidate!</h2>
      <FlexContainer>
        <ImageElement img={'joe-biden.jpg'} alt={'Joe Biden'} title={'Joe Biden'} color={DemocratBlue} />
        <ImageElement img={'donald-trump.jpg'} alt={'Donald Trump'} title={'Donald Trump'} color={RepublicanRed} />
      </FlexContainer>
    </>
  )
}

// Candidate.propTypes = {

// }

export default Candidate

