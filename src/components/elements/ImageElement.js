import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import {VoteContext} from '../context'

const ImageContainer = styled.div`
  ${'' /* width: 50%; */}
  h3 {
    margin-bottom: 25px;
  }
`;

const Image = styled.img`
  transition: .2s;
  filter: grayscale(.4);
  border-radius: 10px;
  width: 70%;
  cursor: pointer;
  :hover {
    transform: scale(1.02,1.02);
    filter: grayscale(0);
    box-shadow: 0 0 150px ${({color}) => color}80;
  }
`;

const ImageElement = props => {
  const {img, alt, title, color, type, choice} = props;
  
  const [vote, setVote] = useContext(VoteContext);

  const onClickHandler = (event, type, choice) => {
    // event.preventDefault();
    setVote(prevVote => ({...prevVote, [type]: choice}))
  }
  
  return (
    <div>
       <ImageContainer onClick={(event) => onClickHandler(event, type, choice)}>
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
  type: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
}

export default ImageElement
