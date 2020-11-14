import React from "react";
import "../../css/home.css";
import shopImg from "../../assets/image/home/shop.png";

import { Link } from "react-router-dom";

const backgroundColor = {
  backgroundColor: "#F5832D",
};

class Home extends React.Component {
  render() {
    return (
      <main style={backgroundColor}>
        <section className={"Contents"}>
          <div className={"LeftContent"}>
            <h1>Renaissance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum justo enim, ultricies id est nec, eleifend commodo
              justo. Donec vel felis lacus. Nam eget risus vitae mauris molestie
              posuere. Praesent facilisis finibus orci id sagittis. Nullam a
              suscipit neque, eget sollicitudin urna.
            </p>
            <Link to="/Game">
              <button
                className={"BtnGame"}
                onClick={() => {
                  localStorage.setItem("menu", JSON.stringify("Game"));
                }}
              >
                Game
              </button>
            </Link>
          </div>
          <div className={"RightContent"}>
            <img src={shopImg} />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
