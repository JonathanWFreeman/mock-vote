import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {stateSvgs} from '../../stateSvgs'

const Svg = styled.svg`
  width: 6em;
  margin-top: 5%;
  path {
    fill: #fff;
  }
`;

const SvgElement = ({state}) => {
  return (
    <Svg viewBox={stateSvgs[state].viewBox}>
      <path d={stateSvgs[state].dimensions}/>
    </Svg>
  )
}

SvgElement.propTypes = {
  state: PropTypes.string.isRequired,
}

export default SvgElement
