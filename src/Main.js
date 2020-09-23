import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Game from "./Components/Game";
import Rank from "./Components/Rank";
import List from "./Components/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Game">
            <Game />
          </Route>
          <Route path="/Rank">
            <Rank />
          </Route>
          <Route path="/List">
            <List />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Main;
