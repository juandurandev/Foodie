import React, { Fragment, useState, useEffect } from "react";
import { BigCard } from "../components/BigCard";
import {
  SpaceCard,
  IngredientsText,
  Steps,
  StepsContainer,
} from "../styles/Recipe/Recipe";
import { useParams } from "react-router-dom";
import { InsideIngredients } from "../components/InsideIngredients";
import { InsideInstructions } from "../components/InsideInstructions";

export const Recipe = () => {
  let { id } = useParams();
  const [info, setInfo] = useState([]);
  const [steps, setSteps] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=1730b638a72945059301578e8005d9b4`;
      const result = await fetch(url);
      const resp = await result.json();

      return [
        setInfo(resp),
        setSteps(resp.analyzedInstructions[0].steps),
        setIngredients(resp.extendedIngredients),
      ];
    }
    fetchData();
  }, []);

  return (
    <Fragment>
      <SpaceCard>
        <BigCard title={info.title} img={info.image} />
      </SpaceCard>
      <IngredientsText>
        <p>Ingredients </p>
      </IngredientsText>
      <StepsContainer>
        <Steps>
          {ingredients.map((res) => (
            <InsideIngredients key={res.number} text={res.original} />
          ))}
        </Steps>
      </StepsContainer>

      <IngredientsText>
        <p>Steps </p>
      </IngredientsText>
      <StepsContainer>
        <Steps>
          {steps.map((res) => (
            <InsideInstructions key={res.number} text={res.step} />
          ))}
        </Steps>
      </StepsContainer>
    </Fragment>
  );
};
