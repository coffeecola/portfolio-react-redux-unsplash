import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/favorites" component={Favorites}></Route>
          <Route path="/photos/:id" component={Details}></Route>
        </Switch>
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
