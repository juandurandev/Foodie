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
  width:auto;

  @media screen and (max-width:1440px){
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 70px;
  }
  @media screen and (max-width: 425px) {
    font-size: 50px;
  }
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-areas: ". step .";

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 1fr auto;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: auto 1fr auto;
  }
`;

export const Steps = styled.div`
  grid-area: step;
  width: auto;
  margin: 0 10px;
  background-color: #f0ebeb;
  border-radius: 10px;
  z-index: -1;
  padding-left:10px;

  
  
  @media screen and (max-width:1440px){
    font-size: 10px;
    
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
   
  }
  @media screen and (max-width: 425px) {
    font-size: 10px;
  }


`;
