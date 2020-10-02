import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

const menus = ["Home", "Game", "Rank", "List"];

class Nav extends React.Component {
  state = {
    color: "white",
    currentMenu: JSON.parse(localStorage.getItem("menu")) || "Home",
    backgroundColor: "",
  };

  componentDidMount() {
    this._setColor(this.state.currentMenu);
  }

  render() {
    const { currentMenu, color, backgroundColor } = this.state;

    return (
      <div id="Container" className={backgroundColor}>
        <ul className="NavList">
          {menus.map((menu, index) => {
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
              <li key={index} onClick={this._clickHandle}>
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

  _clickHandle = (event) => {
    event.preventDefault();
    const menu = event.target.innerText;

    localStorage.setItem("menu", JSON.stringify(menu));

    this._setColor(menu);
  };

  _setColor = (menu) => {
    let color = "white";
    let backgroundColor = "OrangeBack";

    if (menu == "List") {
      color = "black";
      backgroundColor = "WhiteBack";
    }

    this.setState({
      color: color,
      currentMenu: menu,
      backgroundColor: backgroundColor,
    });
  };
}

export default Nav;
