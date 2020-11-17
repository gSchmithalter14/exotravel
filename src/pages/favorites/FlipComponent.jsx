/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  FavoriteContainer,
  FavoriteImage,
  FavoriteContainerBack,
  FavoriteInfoContainer,
  FavoriteInfoForm,
  FavoriteImageInput,
} from './Favorites.styled';
import { LocationTag } from '../../components/typography/Typography';

import { removeFromFav, addDescription } from '../../actions/favoriteAction';

const FlipComponent = ({
  url, id, location, description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [inputText, setInputText] = useState(description);
  const dispatch = useDispatch();

  function handleFlip() {
    setIsFlipped((prevFlip) => !prevFlip);
  }

  function handleInputChange(e) {
    setInputText(e.target.value);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <FavoriteContainer onDoubleClick={handleFlip}>
        <FavoriteImage src={url} />
        <FontAwesomeIcon
          className="delete_icon"
          onClick={() => dispatch(removeFromFav(id))}
          style={{ cursor: 'pointer' }}
          icon={faTrash}
          size="1x"
          color="#2f3640"
        />
        <LocationTag onClick={() => window.open(`http://www.google.com/search?q=${location}`)} moccasin className="location_text">
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            icon={faMapMarker}
            size="1x"
            color="#FECB8B"
          />
          {` ${location}`}
        </LocationTag>
      </FavoriteContainer>
      <FavoriteContainerBack onDoubleClick={handleFlip}>
        <FavoriteInfoContainer img={url}>
          <FavoriteInfoForm>
            <FavoriteImageInput maxLength="90" onChange={handleInputChange} onBlur={() => dispatch(addDescription(id, inputText))} value={inputText} type="text" placeholder="what's on your mind?" />
          </FavoriteInfoForm>
        </FavoriteInfoContainer>
      </FavoriteContainerBack>
    </ReactCardFlip>
  );
};

export default FlipComponent;
