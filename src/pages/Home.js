import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../styles/Home/Container";
import { Card } from "../components/Card";
import { Mock } from "../components/Mock";

const ButtonPosition = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-areas: ". but .";
  margin: 20px 0;
`;

const LoadButton = styled.button`
  grid-area: but;
  align-self: center;
  background-color: transparent;
  justify-self: center;
  height: 80px;
  width: 300px;
  border: 3px solid #e79d2d;
  border-radius: 5px;
  color: #e79d2d;
  text-align: center;
  font-size: 30px;
  transition: opacity 0.8s;
  font-family: "Arial";
  margin-top: 30px;

  &:hover {
    background-color: #e79d2d;
    border: 2px solid #e79d2d;
    color: white;
    transition: 0.5s;
  }
`;

export const Home = () => {
  const [show, setShow] = useState(false);
  const [recip, setRecip] = useState([]);
  const moreItems = show ? recip.length : 6;

  useEffect(() => {
    async function fetchData() {
      const url =
        "https://api.spoonacular.com/recipes/random?apiKey=3ed0607abf5f4f138c043b54292cd6d5&number=9";
      const data = await fetch(url);
      const resp = await data.json();
      console.log(resp.recipes);
      return setRecip(resp.recipes);
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <Mock />

      <Container>
        {recip.slice(0, moreItems).map((res) => (
          <a href={`/Recipe/${res.id}`}>
            <Card key={res.id} id={res.id} img={res.image} title={res.title} />
          </a>
        ))}
      </Container>

      <ButtonPosition>
        {show === false ? (
          <LoadButton onClick={() => setShow(true)}>Show More</LoadButton>
        ) : (
          <LoadButton onClick={() => setShow(false)}>Show Less</LoadButton>
        )}
      </ButtonPosition>
    </Fragment>
  );
};
