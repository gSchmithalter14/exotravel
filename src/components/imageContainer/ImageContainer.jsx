import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

import { Container, Image } from './imageContainer.styled';

// eslint-disable-next-line react/prop-types
export default function ImageContainer({ url }) {
  const [liked, setLiked] = useState(false);

  function handleChange() {
    setLiked((prevLiked) => !prevLiked);
  }

  const icon = liked ? faHeart : faHeartRegular;

  return (
    <Container>
      <Image onDoubleClick={handleChange} src={url} />
      <div className="favorite_icon">
        <FontAwesomeIcon style={{ cursor: 'pointer' }} onClick={handleChange} icon={icon} size="2x" color="#DE6D82" />
      </div>
    </Container>
  );
}
