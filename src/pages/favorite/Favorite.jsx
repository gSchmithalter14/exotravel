import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { LocationTag } from '../../components/typography/Typography';
import { Underline, FavContainer } from './Favorite.styled';

export default function Favorite() {
  const [snippet, setSnippet] = useState('');
  const { id } = useParams();
  const favorite = useSelector((state) => state.favorites.filter((el) => el.id === id));

  console.log(favorite);

  function serveWikiSearch(term) {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&list=search&srsearch=${term}&prop=info&inprop=url&utf8=&format=json`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    }).then((res) => res.json())
      .then((data) => setSnippet(data.query.search[0].snippet))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <FavContainer>
        <LocationTag>
          <FontAwesomeIcon
            onClick={() => serveWikiSearch(`${favorite[0].location}`)}
            style={{ cursor: 'pointer' }}
            icon={faMapMarker}
            size="1x"
            color="#FECB8B"
          />
          {` ${favorite[0].location}`}
        </LocationTag>
        <Underline />
        <div dangerouslySetInnerHTML={{ __html: snippet }} />
      </FavContainer>
    </>
  );
}
