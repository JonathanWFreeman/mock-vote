import React from 'react'
import PropTypes from 'prop-types'

const Login = ({authenticate}) => {

  return (
    <>
      <button onClick={() => authenticate('Facebook')}><p>Login</p></button>
      <p>Only used to help prevent people from voting multiple times.</p>
      <p>Think of it as your voter ID card</p>
    </>
  )
}

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

export default Login