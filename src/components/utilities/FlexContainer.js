import React from 'react'
import styled from 'styled-components';

const Container = styled.section`
  ${'' /* ${Below.small`
    display: block;
  `} */}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  text-transform: capitalize;
`;

const FlexContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FlexContainer
