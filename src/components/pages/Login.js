import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from '../elements'


const Wrapper = styled.section`
  margin: 0 2%;
`;

const Disclaimer = styled.div`
  padding: 25px;
  position: absolute;
  bottom: 0;
`;

const Login = ({authenticate}) => {
  return (
    <>
      <Wrapper>
        <h2>Welcome to Election 2020!</h2>
        <h3>Please login via Facebook to cast your vote!</h3>
        <Button onClick={() => authenticate('Facebook')}><p>Login with Facebook</p></Button>
        <Disclaimer>
          <p>Facebook is only used to help prevent multiple votes being cast.</p>
          <p>No personal information is kept.</p>
        </Disclaimer>
      </Wrapper>
    </>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

export default Login