import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SuggestionsContainer, Suggestion } from './Suggestions.styled';
import icons from './icons';

// redux actions
import { getResults } from '../../actions/resultsAction';

export default function Suggestions() {
  const dispatch = useDispatch();

  // dispatches action
  const fetchData = (keyword) => {
    dispatch(getResults(keyword));
  };

  return (
    <SuggestionsContainer>
      {icons.map((icon) => (
        <Suggestion onClick={() => fetchData(icon.type)} key={icon.type}>
          <Link to={`/results/${icon.type}`}>
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
