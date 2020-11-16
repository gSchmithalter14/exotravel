/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageContainer from '../../components/imageContainer/ImageContainer';
import { SubTitle } from '../../components/typography/Typography';

// Redux actions
import { loadMoreResults } from '../../actions/resultsAction';

export default function Results() {
  const results = useSelector((state) => state.results);
  const dispatch = useDispatch();

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

  function loadMore() {
    dispatch(loadMoreResults(keyword));
  }

  const { data } = results;

  return (
    checkDataNotReady() ? <h1>LOADING</h1> : (
      <>
        <SubTitle nowrap underline>{keyword}</SubTitle>
        <InfiniteScroll
          dataLength={data.length} // This is important field to render the next data
          next={loadMore}
          hasMore
        >
          {data.map((img) => (
            <ImageContainer
              id={img.id}
              location={`${img.location.name}`}
              url={img.urls.regular}
              key={img.id}
              isFaved={false}
            />
          ))}
        </InfiniteScroll>
      </>
    )
  );
}
