import React, { Fragment } from "react";

import { Header } from "../styles/NavBar/NavBar";

export const NavBar = () => {
  return (
    <Fragment>
      <Header>
        <div>
          <a href="/">
            <p>Foodie</p>
          </a>
        </div>
      </Header>
    </Fragment>
  );
};
