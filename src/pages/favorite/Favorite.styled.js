import styled from 'styled-components';

export const FavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Underline = styled.div`
  width: 85px;
  margin-left: 22px;
  margin-top: 8px;
  border-bottom: 2.5px ${(props) => props.theme.hippiepinklight} solid;
`;

export const FavoriteImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;
