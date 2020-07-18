import styled from "styled-components";
export const Foot = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  grid-template-areas:
    ". li ."
    ". text .";
  position: relative;
  bottom: 0;
  height: 200px;
  background-color: white;
  color: black;
  margin-top: 15px;
`;

export const Mention = styled.div`
  grid-area: text;
  justify-self: center;
  align-self: center;

  & p {
    font-family: "Rubik Mono One";
    font-size: 20px;
    color: #e79d2d;
    text-align: center;

    & span {
      color: #e79d2d;
      text-align: center;
    }
  }
`;

export const NetWorks = styled.div`
  grid-area: li;
  display: flex;
  align-self: end;
  justify-self: center;

  & ul {
    display: flex;
    margin: 0;
    padding: 0;

    & li {
      margin: 0 20px;
      list-style-type: none;
      padding: 0;
    }
  }
`;
