import React from "react";
import "../../css/game.css";
import foodImg from "../../assets/images/game/toppokki.png";

function Game() {
  return(
   <main id={"GameContainer"}>
     <section className={"GameRoundBox"}>
      <h1>사진을 보고 가게를 고르세요</h1>
      <div className={"GameContentContainer"}>
        <div className={"GameLeftContents"}>
          <img src={foodImg} alt="test"/>
        </div>
        <div className={"GameRightContents"}>
          <button className = {"BtnAnswer"}>신사리즉석떡볶이</button>
          <button className = {"BtnAnswer"}>잉꼬떡방아</button>
          <button className = {"BtnAnswer"}>틈새라면</button>
          <button className = {"BtnAnswer"}>맵당</button>
        </div>
      </div>
     </section>
   </main>
  );
}

export default Game;
