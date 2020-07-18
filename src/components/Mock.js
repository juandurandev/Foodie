import React, { Fragment } from "react";
import Img from "../img/5861.jpg";
import { Cover } from "../styles/FirstImage/MockUp";

export const Mock = () => {
  return (
    <Fragment>
      <Cover>
        <img src={Img} alt="Not Found" />
      </Cover>
    </Fragment>
  );
};
