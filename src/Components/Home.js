import React from "react";
import ReactDOM from "react-dom";
import "../css/home.css";
import Nav from "./Nav";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav textColor="#fff" />
        <main></main>
      </>
    );
  }
}

export default Home;
