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

export const FavoriteImage = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 5px;
  margin-top: 5px;

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;
