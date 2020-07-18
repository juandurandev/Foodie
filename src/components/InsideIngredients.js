import React from "react";
import styled from "styled-components";

const Result = styled.div`
  position: relative;
  font-size: 25px;
  box-sizing: border-box;
  font-family: "Baloo Da 2", cursive;
  font-weight: 400px;
`;

export const InsideIngredients = ({ text }) => {
  return (
    <Result>
      <ul>
        <ol>{text}</ol>
        <hr />
      </ul>
    </Result>
  );
};
