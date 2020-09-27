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

const Error = ({country}) => {
    console.log(country);
  return (
    <Wrapper>
      {country === null &&
      <>
        <h2>Whoops!</h2>
        <h2>There has been an error.</h2>
        <h2>Please turn off adblock and refresh.</h2>
      </>
      }
      {country !== null && country !== 'US' &&
        <h2>Sorry, US residents only</h2>
      }
    </Wrapper>
  )
}

Error.propTypes = {
  region: PropTypes.string.isRequired,
}

export default Error