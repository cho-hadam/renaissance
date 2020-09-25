import React from "react";
import "../../css/home.css";

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
            <button className={"BtnGame"}>Game</button>
          </div>
          <div className={"RightContent"}>
            <img src={require("../assets/image/shop.png")} />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
