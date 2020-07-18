import React, { Fragment } from "react";
import { Wrapper } from "../styles/animations/wrapper";
import {
  FoodContainer,
  Overlay,
  FooterFoodContainer,
} from "../styles/Card/Card";

export const Card = ({ id, img, title }) => {
  return (
    <Fragment>
      <FoodContainer>
        <Wrapper>
          <img src={img} alt="Image not found" />
        </Wrapper>
        <Overlay />
        <FooterFoodContainer>
          <p>{title}</p>
        </FooterFoodContainer>
      </FoodContainer>
    </Fragment>
  );
};
