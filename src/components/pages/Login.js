import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Button} from '../elements'


const Wrapper = styled.section`
  margin: 0 2%;
`;

const Login = ({authenticate}) => {
  return (
    <>
      <Wrapper>
        <Button onClick={() => authenticate('Facebook')}><p>Login with Facebook</p></Button>
        <p>Only used to help prevent people from voting multiple times.</p>
        <p>Think of it as your voter ID card</p>
      </Wrapper>
    </>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

export default Login