import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { reducer } from "./reducers/index";
import { Provider } from "react-redux";

import styled from "styled-components";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="/photos/:id" component={Details}></Route>
          </Switch>
          <Navbar></Navbar>
        </Root>
      </BrowserRouter>
    </Provider>
  );
};

const Root = styled.div`
  height: 100vh;
  position: relative;
  padding: 16px;
`;

export default App;
