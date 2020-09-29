import React from 'react'
import {Button} from '../elements'
import PropTypes from 'prop-types'

const Login = ({authenticate}) => {

  return (
    <>
      <Button onClick={() => authenticate('Facebook')}><p>Login with Facebook</p></Button>
      <p>Only used to help prevent people from voting multiple times.</p>
      <p>Think of it as your voter ID card</p>
    </>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

export default Login