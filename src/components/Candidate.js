import React from 'react'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types'

import {ImageElement} from './elements';
import {FlexContainer} from './utilities';
import {DemocratBlue, RepublicanRed} from '../Global';

const Candidate = () => {  
  return (
    <>
      <h2>Choose your candidate!</h2>
      <FlexContainer>
        <Link to='/party'>
          <ImageElement img={'joe-biden.jpg'} alt={'Joe Biden'} title={'Joe Biden'} color={DemocratBlue} type={'candidate'} choice={'biden'} />
        </Link>
        <Link to='/party'>
          <ImageElement img={'donald-trump.jpg'} alt={'Donald Trump'} title={'Donald Trump'} color={RepublicanRed} type={'candidate'} choice={'trump'} />
        </Link>
      </FlexContainer>
    </>
  )
}

// Candidate.propTypes = {

// }

export default Candidate

