import React from "react";
import styled from "styled-components";

const Result = styled.div`
  position: relative;
  box-sizing: border-box;
  font-family: "Baloo Da 2", cursive;
  font-weight: 400px;

  
@media all and (max-width:1440px){
  font-size:15px;
}

`;

const Container = styled.div`
margin:5px;

@media all and(max-width:1440px){
  margin:12px;
 }

@media all and(max-width:768px){
  margin:5px;
 }
`

export const InsideIngredients = ({ text }) => {
  return (
    <Result>
      <Container>
        <p>{text}</p>
        <hr />
      </Container>
    </Result>
  );
};
