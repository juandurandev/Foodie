import styled from "styled-components";

export const FoodContainer = styled.div`
  position: relative;
  width: 300px;
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  background-color: white;

  & img {
    grid-area: img;
    object-fit: cover;
    width: 100%;
    border-radius: 4px;
  }

  @media screen and (max-width: 1440px) {
    width: 280px;
  }


  @media screen and (max-width: 1024px) {
    width: 220px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 425px) {
    width: 350px;
  }

  @media screen and (max-width: 375px) {
    width: 280px;
  }
`;

export const Overlay = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0;
  border-radius: 4px;
  transition: opacity 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.2;
    transition: opacity 0.2s;
  }
`;

export const FooterFoodContainer = styled.div`
  position: absolute;
  background-color: #e79d2d;
  z-index: 2;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 0 0 4px 4px;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 400;

  & p {
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    color: white;
    z-index: 3;
    box-sizing: border-box;
    margin: 0;

    @media screen and (max-width: 1440px) {
      font-size: 15px;
    }


    @media screen and (max-width: 1024px) {
      font-size: 10px;
    }

    @media screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media screen and (max-width: 425px) {
      font-size: 15px;
    }

    @media screen and (max-width: 375px) {
      font-size: 15px;
    }
  }
`;
