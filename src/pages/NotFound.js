import React from "react";
import styled from "styled-components";

const Error = styled.div`
  font-size: 130px;
  font-family: "Galada";
  color: #e79d2d;
  text-align: center;
`;

export const NotFound = () => {
  return (
    <div>
      <Error>
        <p>404. Page Not Found</p>
      </Error>
    </div>
  );
};
