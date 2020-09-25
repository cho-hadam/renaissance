import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Screens/Home";
import Game from "./Components/Screens/Game";
import Rank from "./Components/Screens/Rank";
import List from "./Components/Screens/List";
import GameEnd from "./Components/Screens/GameEnd";
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
          <Route exact path="/Game">
            <Game />
          </Route>
          <Route path="/Game/End">
            <GameEnd />
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
