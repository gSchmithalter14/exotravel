import React from 'react';
import { Container, Image } from './imageContainer.styled';

// eslint-disable-next-line react/prop-types
export default function ImageContainer({ url }) {
  return (
    <Container>
      <Image src={url} />
    </Container>
  );
}
