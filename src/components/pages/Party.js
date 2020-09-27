import React from 'react'
import { FlexContainer } from '../utilities/';
import { ImageElement } from '../elements';

const Party = () => {
  return (
    <>
      <h2>Choose your party!</h2>
      <FlexContainer>
          <ImageElement img={'democrat-logo.png'} alt={'Democrat Logo'} title={'Democrat'} type={'party'} choice={'democrat'} link={'submit'} />
          <ImageElement img={'republican-logo.png'} alt={'Republican Logo'} title={'Republican'} type={'party'} choice={'republican'} link={'submit'} />
          <ImageElement img={'other-logo.png'} alt={'Independent Logo'} title={'Other'} type={'party'} choice={'other'} link={'submit'} />
      </FlexContainer>
    </>
  )
}

export default Party

