import styled from "styled-components";
export const Cover = styled.div`
  width: 1200px;
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

  @media screen and (max-width: 1420px) {
    width: 800px;
  }

  @media screen and (max-width: 1024px) {
    width: 600px;
  }

  @media screen and (max-width: 720px) {
    width: 520px;
  }

  @media screen and (max-width: 520px) {
    width: 420px;
  }

  @media screen and (max-width: 440px) {
    width: 380px;
  }

  @media screen and (max-width: 360px) {
    width: 300px;
  }
`;
