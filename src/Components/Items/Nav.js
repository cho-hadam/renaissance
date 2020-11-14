import React, { useEffect, useState } from "react";

import "../../css/nav.css";

import { Link } from "react-router-dom";

const menus = ["Home", "Game", "Rank", "List"];

function Nav() {
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

  useEffect(() => {
    setMenuColor(currentMenu);
  }, []);

  const clickHandle = (e) => {
    e.preventDefault();
    const menu = e.target.innerText;

    localStorage.setItem("menu", JSON.stringify(menu));
    setMenuColor(menu);
  };

  return (
    <div id={"NavContainer"} className={backgroundColor}>
      <ul className="NavList">
        {menus.map((menu, index) => {
          let colorStyle;
          if (menu === currentMenu) {
            colorStyle = {
              color: color,
              borderColor: color,
            };
          } else {
            colorStyle = {
              color: color,
            };
          }

          return (
            <li key={index} onClick={clickHandle}>
              <Link to={`/${menu}`} style={colorStyle}>
                {menu}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
