import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .searchbox {
    position: relative;
    display: block;
    width: 100%;
    max-width: 53px;
    transition: 0.4s linear;
    overflow: hidden;

    &:focus-within {
     max-width: 300px;
   }

   &:focus-within .searchbox__input {
     background-color: #FFF;
     padding-right: 50px;
     box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

   &:focus-within .searchbox__icon path {
    fill: #24233A;
 }

    .searchbox__input {
    display: block;
    appearance: none;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 50px;
    background-color: #2f3640;
    padding: 15px;
    color: #2f3640;
    font-size: 20px;
    cursor: pointer;
    transition: 0.4s linear;

    &::placeholder {
    color: #2f3640;
    }

    .searchbox__icon {
    position: absolute;
    right: calc(53px / 2);
    top: 50%;
    transform: translate(50%, -50%);
    width: 20px;
    height: 20px;
    pointer-events: none;

    path {
    fill: #FECB8B;
    transition: 0.4s linear;
    }
   }
 }
}
`;

export default Container;
