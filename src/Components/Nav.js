import React from "react";
import "../css/nav.css";

const menus = ["Home", "Game", "Rank", "List"];

class Nav extends React.Component {
  state = {
    color: this.props.textColor,
    currentMenu: "Home",
  };

  render() {
    const { currentMenu, color } = this.state;
    return (
      <div id="Container">
        <ul className="NavList">
          {menus.map((menu) => {
            let colorStyle;
            if (menu == currentMenu) {
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
              <li>
                <a href="#" style={colorStyle}>
                  {menu}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
