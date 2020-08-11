import React, { Fragment } from "react";
import styled from "styled-components";
import { Wrapper } from "../styles/animations/wrapper";

const FoodContainer = styled.div`
  display: grid;
  grid-area: card;
  position: relative;
  width: 850px;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  background-color: white;
  align-self: center;
  justify-self: center;

  & img {
    grid-area: img;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
  }

  @media screen and (max-width: 1024px) {
    width: 580px;
  }

  @media screen and (max-width: 720px) {
    width: 480px;
  }

  @media screen and (max-width: 520px) {
    width: 350px;
  }

  @media screen and (max-width: 360px) {
    width: 280px;
  }
`;

const FooterFoodContainer = styled.div`
  position: absolute;
  background-color: #e79d2d;
  z-index: 2;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 0 0 10px 10px;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 400;

  & p {
    font-family: "Nunito", sans-serif;
    font-size: 30px;
    color: white;
    z-index: 3;
    box-sizing: border-box;
    margin: 0;
  }
`;

export const BigCard = ({ id, title, img }) => {
  return (
    <Fragment>
      <FoodContainer>
        <Wrapper>
          <img src={img} alt="Image not found" />
        </Wrapper>
        <FooterFoodContainer>
          <p>{title}</p>
        </FooterFoodContainer>
      </FoodContainer>
    </Fragment>
  );
};
