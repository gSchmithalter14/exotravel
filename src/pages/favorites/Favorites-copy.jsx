/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { } from 'react';
import { useSelector } from 'react-redux';

import { SubTitle } from '../../components/typography/Typography';
import FlipComponent from './FlipComponent';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <SubTitle nowrap underline>favorites</SubTitle>
      {favorites.map((item) => (
        <FlipComponent
          key={item.id}
          location={item.location}
          url={item.url}
          id={item.id}
          description={item.description}
        />
      ))}
    </>
  );
}
