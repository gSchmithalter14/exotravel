import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FavoriteContainer, FavoriteImage } from './Favorites.styled';
import { SubTitle, LocationTag } from '../../components/typography/Typography';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <>
      <SubTitle nowrap underline>favorites</SubTitle>
      {favorites.map((el) => (
        <FavoriteContainer>
          <FavoriteImage src={el.url} />
          <FontAwesomeIcon
            className="delete_icon"
            onClick={() => console.log('DELETE')}
            style={{ cursor: 'pointer' }}
            icon={faTrash}
            size="1x"
            color="#2f3640"
          />
          <LocationTag className="location_text">
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              icon={faMapMarker}
              size="1x"
              color="#FECB8B"
            />
            {` ${el.location}`}
          </LocationTag>
        </FavoriteContainer>
      ))}
    </>
  );
}
