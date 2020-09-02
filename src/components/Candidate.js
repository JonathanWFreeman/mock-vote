import React from 'react'
// import PropTypes from 'prop-types'

import {ImageElement} from './elements';
import {FlexContainer} from './utilities';
import {DemocratBlue, RepublicanRed} from '../Global';

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

