import React from 'react'
import {Link} from 'react-router-dom'

import { FlexContainer } from './utilities/';
import { ImageElement } from './elements';
// import PropTypes from 'prop-types'

const Party = (props) => {
  return (
    <>
      <h2>Choose your party!</h2>
      <FlexContainer>
          <Link to='/submit'><ImageElement img={'democrat-logo.png'} alt={'Democrat Logo'} title={'Democrat'} type={'party'} choice={'democrat'}/></Link>
          <Link to='/submit'><ImageElement img={'republican-logo.png'} alt={'Republican Logo'} title={'Republican'} type={'party'} choice={'republican'}/></Link>
          <Link to='/submit'><ImageElement img={'other-logo.png'} alt={'Independent Logo'} title={'Other'} type={'party'} choice={'other'}/></Link>
      </FlexContainer>
    </>
  )
}

// Party.propTypes = {

// }

export default Party

