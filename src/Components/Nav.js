import React from "react";
import ReactDOM from "react-dom";
import "../css/nav.css";

class Nav extends React.Component {
  render() {
    const menuStyle = {
      color: this.props.textColor,
    };
    return (
      <>
        <div id="Container">
          <ul className="NavList">
            <a href="#" style={menuStyle}>
              <li>Home</li>
            </a>
            <a href="#" style={menuStyle}>
              <li>Game</li>
            </a>
            <a href="#" style={menuStyle}>
              <li>Rank</li>
            </a>
            <a href="#" style={menuStyle}>
              <li>List</li>
            </a>
          </ul>
        </div>
      </>
    );
  }
}

export default Nav;
