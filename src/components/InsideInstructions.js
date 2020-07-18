import React from "react";
import styled from "styled-components";

const Results = styled.div`
  position: relative;
  font-size: 25px;
  box-sizing: border-box;
  font-family: "Baloo Da 2", cursive;
  font-weight: 400px;
`;

export const InsideInstructions = ({ text }) => {
  return (
    <Results>
      <ul>
        <ol>{text}</ol>
        <hr />
      </ul>
    </Results>
  );
};
