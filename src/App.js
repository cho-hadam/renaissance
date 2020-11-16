import logo from "./logo.svg";

import Nav from "./Components/Items/Nav";
import Home from "./Components/Screens/Home";
// import Game from "./Components/Screens/Game";
// import Rank from "./Components/Screens/Rank";
import List from "./Components/Screens/List";
import GameEnd from "./Components/Screens/GameEnd";
import Shop from "./Components/Screens/Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
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

        {/* <Route exact path="/Game">
          <Game />
        </Route> */}
        <Route path="/Game/End">
          <GameEnd />
        </Route>

        {/* <Route path="/Rank">
          <Rank />
        </Route> */}

        <Route exact path="/List">
          <List />
        </Route>
        <Route path="/List/:id">
          <Shop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
