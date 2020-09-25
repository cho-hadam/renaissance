import React from "react";
import "../../css/list.css";
import { Link } from "react-router-dom";

const backgroundColor = {
  backgroundColor: "white",
};

class List extends React.Component {
  render() {
    return (
      <main style={backgroundColor}>
        <Link to={`/List/${"dfsd"}`}>go to detail page</Link>
      </main>
    );
  }
}

export default List;
