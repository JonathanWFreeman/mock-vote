import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CandidateContainer = styled.div`
  ${'' /* width: 50%; */}
`;

const CandidateImage = styled.img`
  transition: .2s;
  filter: grayscale(.4);
  border-radius: 10px;
  ${'' /* width: 50%; */}
  :hover {
    transform: scale(1.02,1.02);
    filter: grayscale(0);
    box-shadow: 0 0 25px ${({color}) => color};
  }
`;


const ImageContainer = props => {
  const {img, alt, title, color} = props;

  return (
    <div>
       <CandidateContainer>
          <h3>{title}</h3>
          <CandidateImage src={require(`../../images/${img}`)} alt={alt} color={color} />
        </CandidateContainer> 
    </div>
  )
}

ImageContainer.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default ImageContainer
