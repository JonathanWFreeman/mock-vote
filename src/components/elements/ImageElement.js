import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const ImageContainer = styled.div`
  ${'' /* width: 50%; */}
`;

const Image = styled.img`
  transition: .2s;
  filter: grayscale(.4);
  border-radius: 10px;
  width: 70%;
  :hover {
    transform: scale(1.02,1.02);
    filter: grayscale(0);
    box-shadow: 0 0 150px ${({color}) => color}80;
  }
`;

const ImageElement = props => {
  const {img, alt, title, color} = props;

  return (
    <div>
       <ImageContainer>
          <h3>{title}</h3>
          <Image src={require(`../../images/${img}`)} alt={alt} color={color} />
        </ImageContainer> 
    </div>
  )
}

ImageElement.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default ImageElement
