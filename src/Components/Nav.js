import React from "react";
import ReactDOM from "react-dom";
import "../css/nav.css";

const menus = ["Home", "Game", "Rank", "List"];

class Nav extends React.Component {
  state = {
    currentMenu: this.props.menu,
  };
  render() {
    const textColor = {
      color: this.props.textColor,
    };
    return (
      <>
        <div id="Container">
          <ul className="NavList">
            {menus.map((menu) => (
              <li>
                <a href="#" style={textColor}>
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
