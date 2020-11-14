import React, { } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import { SubTitle } from '../../components/typography/Typography';

export default function Results() {
  const results = useSelector((state) => state.results);

  const { keyword } = useParams();

  function checkDataNotReady() {
    if (!results.data) {
      return true;
    }

    if (results.keyword !== keyword) {
      return true;
    }

    return false;
  }

  const { data } = results;

  return (
    checkDataNotReady() ? <h1>LOADING</h1> : (
      <>
        <SubTitle nowrap underline>{keyword}</SubTitle>
        {data.map((img) => <ImageContainer url={img.urls.regular} key={img.id} />)}
      </>
    )
  );
}
