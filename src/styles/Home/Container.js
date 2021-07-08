import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 20px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, auto);
  }
`;
