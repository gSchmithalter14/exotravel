import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SuggestionsContainer, Suggestion } from './Suggestions.styled';
import icons from './icons';

export default function Suggestions() {
  return (
    <SuggestionsContainer>
      {icons.map((icon) => (
        <Suggestion key={icon.type}>
          <Link to="/results">
            <Icon src={icon.svg} alt="icon" />
          </Link>
        </Suggestion>
      ))}
    </SuggestionsContainer>
  );
}

const Icon = styled.img`
  height:50px; 
  width: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
