import React from "react";

import "../../css/home.css";
import ShopImage from "../../assets/image/home/shop-isometric.png";

function Home() {
  return (
    <main id={"HomeContainer"}>
      <section className={"HomeContents"}>
        <div className={"LeftContent"}>
          <h1>Renaissance</h1>
          <p className={"HomeDescription"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            justo enim, ultricies id est nec, eleifend commodo justo. Donec vel
            felis lacus. Nam eget risus vitae mauris molestie posuere. Praesent
            facilisis finibus orci id sagittis. Nullam a suscipit neque, eget
            sollicitudin urna.
          </p>
          <button className={"BtnGame"}>Game</button>
        </div>
        <div className={"RightContent"}>
          <img src={ShopImage} />
        </div>
      </section>
    </main>
  );
}

export default Home;
