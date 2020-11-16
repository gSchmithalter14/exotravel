import React, {} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { LocationTag } from '../../components/typography/Typography';
import { Underline, FavContainer } from './Favorite.styled';

export default function Favorite() {
  const { id } = useParams();
  const favorite = useSelector((state) => state.favorites.filter((el) => el.id === id));

  // console.log(favorite);

  return (
    <>
      <FavContainer>
        <LocationTag>
          <FontAwesomeIcon
            style={{ cursor: 'pointer' }}
            icon={faMapMarker}
            size="1x"
            color="#FECB8B"
          />
          {` ${favorite[0].location}`}
        </LocationTag>
        <Underline />
      </FavContainer>
    </>
  );
}
