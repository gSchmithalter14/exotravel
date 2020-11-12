import styled from 'styled-components';

export const SuggestionsContainer = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
`;

export const Suggestion = styled.div`
      height: 80px;
      width: 80px;
      margin: 40px;
      background: transparent;
      border-radius: 10px;
      position: relative;
      box-shadow: 0 25px 60px rgba(0,0,0,.8);

      @media screen and (max-width: 600px) {
        margin: 10px
    }
`;
