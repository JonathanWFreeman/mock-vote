import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import {BackgroundColor} from '../../Global'

const rotate = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const ButtonWrapper = styled.div`
  display: flex;
  ${'' /* width: 100%; */}
  background: linear-gradient(90deg, rgba(0,174,243,1) 0%, rgba(0,174,243,1) 20%, rgba(145,0,255,1) 50%, rgba(232,27,35,1) 80%, rgba(232,27,35,1) 100%);
  padding: 4px;
  border-radius: 10px;
  margin: 8% 2%;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-size: 400% 400%;
    animation: ${rotate} 2s linear;
  }
`;

const ButtonContainer = styled.button`
  width: 100%;
  padding: 10px 50px;
  color: #FFF;
  letter-spacing: 1px;
  background: #333;
  ${'' /* border: 4px solid ${({ color }) => color}; */}
  ${'' /* background: ${({ color }) => color}; */}
  transition: 0.5s;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    ${'' /* background: ${({ color }) => color}B8; */}
    background: ${BackgroundColor}B8;
  }
`;

const Button = ({ children, color, onClick }) => (
  <ButtonWrapper color={color} onClick={onClick}>
    <ButtonContainer color={color}>
      {children}
    </ButtonContainer>
  </ButtonWrapper>
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