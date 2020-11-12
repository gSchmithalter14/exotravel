import React from 'react';
import styled from 'styled-components';
import { Paragraph, SubTitle } from '../../components/typography/Typography';

export default function Home() {
  return (
    <>
      <HomeContainer>
        <div className="subtitle-wrapper">
          <SubTitle center>DISCOVER YOUR NEXT ADVENTURE</SubTitle>
        </div>
        <div className="paragraph-wrapper">
          <Paragraph light center>What would you like to explore?</Paragraph>
        </div>
      </HomeContainer>
    </>
  );
}

export const HomeContainer = styled.div`
  background-color: #00ff00;
  background: linear-gradient( rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.5) ), url('https://images.unsplash.com/photo-1605152913908-21bf505539cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80');
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  
  .subtitle-wrapper {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .paragraph-wrapper {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
