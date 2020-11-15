import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FavoriteContainer, FavoriteImage } from './Favorites.styled';
import { SubTitle, LocationTag } from '../../components/typography/Typography';

// Redux
import { removeFromFav } from '../../actions/favoriteAction';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  return (
    <>
      <SubTitle nowrap underline>favorites</SubTitle>
      {favorites.map((el) => (
        <FavoriteContainer key={el.id}>
          <Link to={`/favorites/${el.id}`}>
            <FavoriteImage onDoubleClick={() => console.log('redirect to favorite page')} src={el.url} />
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
          </Link>
        </FavoriteContainer>
      ))}
    </>
  );
}
