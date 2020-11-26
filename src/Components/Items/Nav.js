import React from "react";

import "../../css/nav.css";

import { Link } from "react-router-dom";

const menus = ["Home", "Game", "List"];

function Nav(props) {
  const { color, currentMenu, backgroundColor, clickHandle } = props.setNav;

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
