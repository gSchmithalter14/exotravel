/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  FavoriteContainer, FavoriteImage, FavoriteContainerBack, FavoriteInfo,
} from './Favorites.styled';
import { SubTitle, LocationTag } from '../../components/typography/Typography';

// Redux
import { removeFromFav } from '../../actions/favoriteAction';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip() {
    setIsFlipped((prevFlip) => !prevFlip);
  }

  const dispatch = useDispatch();

  return (
    <>
      <SubTitle nowrap underline>favorites</SubTitle>
      {favorites.map((el) => (

        <ReactCardFlip key={el.id} isFlipped={isFlipped} flipDirection="horizontal">
          <FavoriteContainer onClick={handleFlip}>
            <FavoriteImage src={el.url} />
            <FontAwesomeIcon
              className="delete_icon"
              onClick={() => dispatch(removeFromFav(el.id))}
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
              {` ${el.location}`}
            </LocationTag>
          </FavoriteContainer>
          <FavoriteContainerBack onClick={handleFlip}>
            <FavoriteInfo>
              <h1>This is the back</h1>
            </FavoriteInfo>
          </FavoriteContainerBack>
        </ReactCardFlip>

      ))}
    </>
  );
}
