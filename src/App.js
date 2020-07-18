import React from "react";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";
import { NotFound } from "./pages/NotFound";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Recipe/:id">
            <Recipe />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
