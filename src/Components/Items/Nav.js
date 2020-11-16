import React, { useEffect, useState } from "react";

import "../../css/nav.css";

import { Link } from "react-router-dom";

const menus = ["Home", "Game", "Rank", "List"];

function Nav(props) {
  const { color, currentMenu, backgroundColor, setMenuColor } = props.setNav;
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
