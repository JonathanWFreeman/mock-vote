import React from 'react'
import styled from 'styled-components';
// import PropTypes from 'prop-types'

const HeaderEl = styled.header`
  background-color: #DFDBE5;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h16v2h-6v6h6v8H8v-6H2v6H0V0zm4 4h2v2H4V4zm8 8h2v2h-2v-2zm-8 0h2v2H4v-2zm8-8h2v2h-2V4z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const Gradient = styled.div`
  background: rgb(0,174,243);
  background: -moz-linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  background: linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  ${'' /* filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00aef3",endColorstr="#e81b23",GradientType=1); */}
  opacity: .8;
  padding: 0 0 10px;
`;

const Header = props => {
  return (
    <HeaderEl>
      <Gradient>
        <h1>Election 2020</h1>
      </Gradient>
    </HeaderEl>
  )
}

// Nav.propTypes = {

// }

export default Header
