import React from 'react'
import { FlexContainer } from './utilities/';
import { ImageElement } from './elements';
// import PropTypes from 'prop-types'

const Party = (props) => {
  return (
    <>
      <h2>Choose your party!</h2>
      <FlexContainer>
          <ImageElement img={'democrat-logo.png'} alt={'Democrat Logo'} title={'Democrat'}/>
          <ImageElement img={'republican-logo.png'} alt={'Republican Logo'} title={'Republican'}/>
      </FlexContainer>
    </>
  )
}

// Party.propTypes = {

// }

export default Party

