import styled from 'styled-components';

export const FavoriteContainer = styled.div`
 position: relative;
 margin: 10px 0px;

 .delete_icon {
    position: absolute; 
    top: 20px;
    right:20px;
 }

 .location_text {
    position: absolute; 
    bottom: 20px;
    left:20px;
 }

 @media screen and (max-width: 600px) {
      margin: 0px;
  }
`;

export const FavoriteContainerBack = styled.div`
 margin: 10px 0px;

 @media screen and (max-width: 600px) {
      margin: 0px;
  }
`;

export const FavoriteImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const FavoriteInfoContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  width: 100%;
  height: 300px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const FavoriteInfoForm = styled.div`
  width: 90%;
  margin: 10px auto;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FavoriteImageInput = styled.textarea`
  outline: 0;
  height: 150px;
  overflow: auto;
  width: 230px;
  background: transparent;
  border-width: 0px;
  border-color: white;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 15px 10px;
  border-radius: 20px;

  &, &:focus, &::placeholder  {
    color: ${(props) => props.theme.light};
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
}
`;
