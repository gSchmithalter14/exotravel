import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/searchBar/SearchBar';
import Suggestions from '../../components/suggestions/Suggestions';
import { Paragraph, SubTitle } from '../../components/typography/Typography';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <div className="subtitle-wrapper">
          <SubTitle bluenights center>DISCOVER YOUR NEXT ADVENTURE</SubTitle>
        </div>
        <Paragraph light center>What would you like to explore?</Paragraph>
        <SearchBar />
        <Suggestions />
      </HomeContainer>
    </>
  );
}

export const HomeContainer = styled.div`
  background: linear-gradient( rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.5) ), url('https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1274&q=80');
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;
