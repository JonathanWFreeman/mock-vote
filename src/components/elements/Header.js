import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const HeaderEl = styled.header`
  background: rgb(0,174,243);
  background: -moz-linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  background: linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00aef3",endColorstr="#e81b23",GradientType=1);
`;

const Header = props => {
  return (
    <HeaderEl className="App-header">
      <h1>Election 2020</h1>
    </HeaderEl>
  )
}

// Nav.propTypes = {

// }

export default Header
