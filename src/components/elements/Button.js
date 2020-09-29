import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {BackgroundColor} from '../../Global'

const rotate = keyframes`
   from {
    background-position: 0% 50%;
  }
  to {
    background-position: 100% 50%;
  }
`;

const ButtonGradient = styled.div`
  background: linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  padding: 4px;
  border-radius: 10px;
  margin: 2%;
  transition: 0.5s;
  animation: ${rotate} 2s linear infinite;
  cursor: pointer;
`;

const ButtonContainer = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  text-decoration: none;
  margin: 0;
  display: inline-block;
  padding: 10px 120px;
  color: #FFF;
  letter-spacing: 1px;
  ${'' /* border: 4px solid ${({ color }) => color}; */}
  background: #333;
  ${'' /* background: ${({ color }) => color}; */}
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  ${'' /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0003); */}
  :hover {
    ${'' /* background: ${({ color }) => color}B8; */}
    background: ${BackgroundColor}B8;
  }
`;

const Button = ({ children, color, onClick }) => (
  <ButtonGradient color={color} onClick={onClick}>
    <ButtonContainer color={color}>
      {children}
    </ButtonContainer>
  </ButtonGradient>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#9100ff'
}

export default Button;