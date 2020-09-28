import React from 'react'
import {ImageElement} from '../elements';
import {FlexContainer} from '../utilities';
import {DemocratBlue, RepublicanRed} from '../../Global';

const Candidate = () => {  
  return (
    <>
      <h2>Choose your candidate!</h2>
      <FlexContainer>
        <ImageElement img={'joe-biden.jpg'} alt={'Joe Biden'} title={'Joe Biden'} color={DemocratBlue} type={'candidate'} choice={'biden'} link={'party'} />
        <ImageElement img={'donald-trump.jpg'} alt={'Donald Trump'} title={'Donald Trump'} color={RepublicanRed} type={'candidate'} choice={'trump'} link={'party'} />
      </FlexContainer>
    </>
  )
}

export default Candidate
