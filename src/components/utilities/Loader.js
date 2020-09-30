import React from 'react'
import styled, {keyframes} from 'styled-components'

const Wrapper = styled.aside`
  position: absolute;
  background: #282c3490;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;

const Loader = () => {
  return (
    <Wrapper>
      <Container>
        <Animation />
      </Container>
    </Wrapper>
  )
}

export default Loader
