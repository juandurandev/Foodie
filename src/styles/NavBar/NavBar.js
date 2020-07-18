import styled from "styled-components";

export const Header = styled.header`
  /* position: fixed; */
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: ". title .";
  z-index: 9999;
  background-color: white;
  border-bottom: 2px solid #c6c6c6;
  top: 0;
  & div {
    display: grid;
    justify-content: center;
    grid-area: title;
    font-family: "Galada", cursive;
    line-height: 0;
    font-weight: 800px;
    color: #e79d2d;
    & a {
      text-decoration: none;
      color: #e79d2d;
      font-size: 100px;
      margin-top: 5px;
      @media screen and (max-width: 520px) {
        font-size: 50px;
      }
    }
  }
`;
