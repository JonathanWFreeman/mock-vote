import React from 'react'
import PropTypes from 'prop-types'
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

const ErrorBlock = styled.div`
  margin: 2%;
  h3{
    margin: 2% 0;
  }
`;

const Error = ({error}) => {
  return (
    <Wrapper>
      <>
        <h2>There has been an error.</h2>
        <h2>Please refresh and try again.</h2>
        {error && 
          <ErrorBlock>
            <h3>Error:</h3>
            <h4>{error}</h4>
            <h4>{error.includes('fetch') && `Make sure adblock is turned off.`}</h4>
          </ErrorBlock>
        }
      </>
    </Wrapper>
  )
}

Error.propTypes = {
  error: PropTypes.any,
}

export default Error