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
      {favorites.map((el) => (
        <FlipComponent key={el.id} location={el.location} url={el.url} id={el.id} />
      ))}
    </>
  );
}
