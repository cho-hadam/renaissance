import { useEffect, useState } from "react";
import logo from "./logo.svg";

import Nav from "./Components/Items/Nav";
import Home from "./Components/Screens/Home";
import Game from "./Components/Screens/Game";
// import Rank from "./Components/Screens/Rank";
import List from "./Components/Screens/List";
import GameEnd from "./Components/Screens/GameEnd";
import Shop from "./Components/Screens/Shop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // Set Nav Style
  const [color, setColor] = useState("white");
  const [currentMenu, setCurrentMenu] = useState(
    JSON.parse(localStorage.getItem("menu")) || "Home"
  );
  const [backgroundColor, setBackgroundColor] = useState("");

  const setMenuColor = (currentMenu) => {
    let color = "white";
    let backgroundColor = "OrangeBack";

    if (currentMenu === "List") {
      color = "black";
      backgroundColor = "WhiteBack";
    }

    setColor(color);
    setCurrentMenu(currentMenu);
    setBackgroundColor(backgroundColor);
  };

  const clickHandle = (e) => {
    e.preventDefault();
    const menu = e.target.innerText;

    localStorage.setItem("menu", JSON.stringify(menu));
    setMenuColor(menu);
  };

  // componentDidMount
  useEffect(() => {
    setMenuColor(currentMenu);
  }, []);

  return (
    <Router>
      <Nav
        setNav={{
          color: color,
          currentMenu: currentMenu,
          backgroundColor: backgroundColor,
          setMenuColor: setMenuColor,
          clickHandle: clickHandle,
        }}
      />

      <Switch>
        <Route exact path="/">
          <Home setNav={{ clickHandle: clickHandle }} />
        </Route>
        <Route path="/Home">
          <Home setNav={{ clickHandle: clickHandle }} />
        </Route>

        <Route exact path="/Game">
          <Game />
        </Route>
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
