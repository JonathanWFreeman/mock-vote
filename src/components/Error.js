import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
  align-content: center;
	justify-content: center;
  padding: 3% 5%;
  min-height: 90vh;
  min-width: 100vw;
  background: #000;
`;

const Error = () => {
  return (
    <Wrapper>
      <h2>Whoops!</h2>
      <h2>There has been an error.</h2>
      <h2>Please refresh or try again later.</h2>
    </Wrapper>
  )
}

export default Error
