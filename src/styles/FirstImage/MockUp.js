import styled from "styled-components";
export const Cover = styled.div`
  width: 800px;
  border: 0px solid black;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  & img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    object-fit: cover;
  }

  @media screen and (max-width: 1440px) {
    width: 600px;
  }

  @media screen and (max-width: 1024px) {
    width: 500px;
  }

  @media screen and (max-width: 768px) {
    width: 420px;
  }

  @media screen and (max-width: 425px) {
    width: 380px;
  }

  @media screen and (max-width: 375px) {
    width: 350px;
  }

  @media screen and (max-width: 320px) {
    width: 280px;
  }
`;
