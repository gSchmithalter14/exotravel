import React from 'react';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import { SubTitle } from '../../components/typography/Typography';
import data from '../../data';

export default function Results() {
  return (
    <>
      <SubTitle underline>Mountain</SubTitle>
      {data.map((img) => <ImageContainer url={img.url} key={img.id} />)}
    </>
  );
}
