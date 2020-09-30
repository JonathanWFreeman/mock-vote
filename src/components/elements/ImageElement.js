import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {Above, Below} from '../utilities'
import {VoteContext, RouteContext} from '../context'

const ImageContainer = styled.div`
  flex: 1;
  ${Below.small`
    width: 100%;
    flex: none;
  `}
  ${Above.large`
    flex: none;
  `}
  h3 {
    margin: 25px;
    color: #FFF;
  }
`;

const Image = styled.img`
  transition: .2s;
  border-radius: 10px;
  width: 70%;
`;

const ImageClick = styled(Image)`
  filter: grayscale(.4);
  cursor: pointer;
  ${({color}) => `border: 4px solid transparent`};
  :hover {
    transform: scale(1.02,1.02);
    filter: grayscale(0);
    box-shadow: 0 0 150px ${({color}) => color}80;
    ${({color}) => `border: 4px solid ${color}`};
  }
`;

export const ImageSubmit = props => {
  const {img, alt, title, color, type, choice, link} = props;
  
  const [vote, setVote] = useContext(VoteContext);
  const [route, setRoute] = useContext(RouteContext);

  const onClickHandler = (type, choice, link) => {
    setVote(prevVote => ({...prevVote, [type]: choice}))
    setRoute(link);
  }
  
  return (
    <ImageContainer onClick={() => onClickHandler(type, choice, link)}>
      <h3>{title}</h3>
      <ImageClick src={require(`../../images/${img}`)} alt={alt} color={color} />
    </ImageContainer> 
  )
}

export const ImageElement = props => {
  const {img, alt, color} = props;

  return (
    <Image src={require(`../../images/${img}`)} alt={alt} color={color} />
  )
}

ImageSubmit.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  choice: PropTypes.string.isRequired,
}

ImageElement.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}