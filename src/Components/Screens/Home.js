import React from "react";

import "../../css/home.css";
import ShopImage from "../../assets/images/home/shop-isometric.png";

import { Link } from "react-router-dom";

function Home(props) {
  const { clickHandle } = props.setNav;

  return (
    <main id={"HomeContainer"}>
      <section className={"HomeContents"}>
        <div className={"LeftContent"}>
          <h1>Renaissance</h1>
          <p className={"HomeDescription"}>
            {
              "신사리 상권은 별이 내린 곳에서 태어난 영웅의 이야기가 살아 숨 쉬는 곳, 저마다 꿈을 가진 언젠가 밝게 빛날 별과 같은 사람들이 모이는 곳, 도림천에 흐르는 반짝이는 별빝의 물길을 따라 시간이 흐르는 곳입니다. 별빛신사리 상권 홍보를 위해 제작된 웹사이트로, 주어진 음식 사진을 보고 상점을 맞추는 게임과 상점 정보들을 확인할 수 있는 리스트를 제공하고 있습니다."
            }
          </p>
          <button className={"BtnGame"} onClick={clickHandle}>
            <Link to={"/Game"} className={"LinkGame"}>
              Game
            </Link>
          </button>
        </div>
        <div className={"RightContent"}>
          <img src={ShopImage} />
        </div>
      </section>
    </main>
  );
}

export default Home;
