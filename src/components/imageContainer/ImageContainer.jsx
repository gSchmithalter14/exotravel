/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { Container, Image } from './imageContainer.styled';
import { LocationTag } from '../typography/Typography';

// Redux action
import { addToFav, removeFromFav } from '../../actions/favoriteAction';

// eslint-disable-next-line react/prop-types
export default function ImageContainer({
  url, location, id, isFaved, latitude, longitude,
}) {
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(isFaved);

  function addToFavorites() {
    if (!liked) {
      dispatch(addToFav({
        id, location, url, faved: true, description: '', latitude, longitude,
      }));
    } else {
      dispatch(removeFromFav(id));
    }

    setLiked((prevLiked) => !prevLiked);
  }

  const icon = liked ? faHeart : faHeartRegular;

  return (
    <Container>
      <Image onDoubleClick={addToFavorites} src={url} />
      <FontAwesomeIcon className="favorite_icon" style={{ cursor: 'pointer' }} onClick={addToFavorites} icon={icon} size="2x" color="#DE6D82" />
      <LocationTag moccasin className="location_text">
        <FontAwesomeIcon
          style={{ cursor: 'pointer' }}
          icon={faMapMarker}
          size="1x"
          color="#FECB8B"
        />
        {` ${location}`}
      </LocationTag>
    </Container>
  );
}
