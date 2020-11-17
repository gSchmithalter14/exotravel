/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

export default function Map({ history }) {
  const favorites = useSelector((state) => state.favorites);

  // if no favorites found, redirect to homepage
  if (favorites.length === 0) {
    history.push('/');
  }

  const [selectedLocation, setSelectedLocation] = useState(null);
  console.log(favorites);
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '85vh',
    latitude: 39.909736,
    longitude: 1.406250,
    zoom: 1,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/schmigui/ckhm4l0xq0x6619sb05z3i8n3"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {favorites.map((item) => (
          <Marker key={item.id} latitude={item.latitude} longitude={item.longitude}>
            <FontAwesomeIcon
              style={{ cursor: 'pointer' }}
              icon={faMapMarker}
              size="1x"
              color="#DE6D82"
              onClick={(e) => {
                e.preventDefault();
                setSelectedLocation(item);
              }}
            />
          </Marker>
        ))}
        {selectedLocation && (
          <Popup
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
            onClose={() => {
              setSelectedLocation(null);
            }}
          >
            <div>
              <p>{selectedLocation.location}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
