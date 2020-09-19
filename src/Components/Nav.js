import React from "react";
import "../css/nav.css";

const menus = ["Home", "Game", "Rank", "List"];

class Nav extends React.Component {
  state = {
    color: this.props.textColor,
    currentMenu: "Home",
  };

  render() {
    const textColor = {
      color: this.state.color,
    };
    const { currentMenu } = this.state;
    return (
      <div id="Container">
        <ul className="NavList">
          {menus.map((menu) => {
            let className = "";
            if (menu == currentMenu) {
              className = "current";
            }
            return (
              <li>
                <a href="#" style={textColor} className={className}>
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
