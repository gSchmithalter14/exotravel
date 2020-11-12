import React from 'react';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import data from '../../data';

export default function Results() {
  return (
    <>
      <h2>Mountain</h2>
      {data.map((img) => <ImageContainer url={img.url} key={img.id} />)}
    </>
  );
}
