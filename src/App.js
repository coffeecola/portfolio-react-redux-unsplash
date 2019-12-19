import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

import { useSelector } from "react-redux";

const App = () => {
  const { results, liked, query } = useSelector(state => state);
  console.log(results, liked);
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home results={results} query={query} liked={liked} />
            )}
          ></Route>
          <Route
            render={props => (
              <Favorites {...props} query={query} liked={liked} />
            )}
            path="/favorites"
          ></Route>
          <Route path="/photos/:id" component={Details}></Route>
        </Switch>
        <Navbar></Navbar>
      </Root>
    </BrowserRouter>
  );
};

const Root = styled.div`
  height: 100vh;
  position: relative;
  padding: 16px;
`;

export default App;
