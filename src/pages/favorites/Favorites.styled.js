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
  border-radius: 5px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

export const FavoriteInfo = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 25px 60px rgba(0,0,0,.8);

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;
