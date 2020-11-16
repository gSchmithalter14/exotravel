/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  FavoriteContainer, FavoriteImage, FavoriteContainerBack, FavoriteInfo,
} from './Favorites.styled';
import { LocationTag } from '../../components/typography/Typography';

import { removeFromFav } from '../../actions/favoriteAction';

const FlipComponent = ({ url, id, location }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const dispatch = useDispatch();

  function handleFlip() {
    setIsFlipped((prevFlip) => !prevFlip);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FavoriteContainer onClick={handleFlip}>
        <FavoriteImage src={url} />
        <FontAwesomeIcon
          className="delete_icon"
          onClick={() => dispatch(removeFromFav(id))}
          style={{ cursor: 'pointer' }}
          icon={faTrash}
          size="1x"
          color="#2f3640"
        />
        <LocationTag moccasin className="location_text">
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            icon={faMapMarker}
            size="1x"
            color="#FECB8B"
          />
          {` ${location}`}
        </LocationTag>
      </FavoriteContainer>
      <FavoriteContainerBack onClick={handleFlip}>
        <FavoriteInfo>
          <h1>This is the back</h1>
        </FavoriteInfo>
      </FavoriteContainerBack>
    </ReactCardFlip>
  );
};

export default FlipComponent;
