import styled from "styled-components";
export const SpaceCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: ". card .";
  padding: 0;
  margin-top: 50px;
`;

export const IngredientsText = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 130px;
  text-align: center;
  margin: 0;
  line-height: 0;

  @media screen and (max-width: 720px) {
    font-size: 100px;
  }
  @media screen and (max-width: 520px) {
    font-size: 80px;
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-areas: ". step .";

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 1fr auto;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const Steps = styled.div`
  grid-area: step;
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #f0ebeb;
  border: 1px solid #f0ebeb;
  border-radius: 10px;
  z-index: -1;
  padding: 10px;
`;
