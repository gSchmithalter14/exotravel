import styled from 'styled-components';

export const Container = styled.div`
 position: relative;
 margin: 10px 0px;

 .favorite_icon {
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

export const Image = styled.img`
  width: 100%;
  margin-top: 5px;
`;
