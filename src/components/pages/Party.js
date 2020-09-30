import React from 'react'
import { FlexContainer } from '../utilities/';
import { ImageSubmit } from '../elements';

const Party = () => {
  return (
    <>
      <h2>Choose your party affiliation!</h2>
      <FlexContainer>
          <ImageSubmit img={'democrat-logo.png'} alt={'Democrat Logo'} title={'Democrat'} type={'party'} choice={'democrat'} link={'submit'} />
          <ImageSubmit img={'republican-logo.png'} alt={'Republican Logo'} title={'Republican'} type={'party'} choice={'republican'} link={'submit'} />
          <ImageSubmit img={'other-logo.png'} alt={'Other Logo'} title={'Other'} type={'party'} choice={'other'} link={'submit'} />
      </FlexContainer>
    </>
  )
}

export default Party

