import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import { Below } from './breakpoints';

const Container = styled.section`
  ${'' /* ${Below.small`
    display: block;
  `} */}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
`;

const FlexContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

FlexContainer.propTypes = {
  children: PropTypes.object.isRequired
}

export default FlexContainer
