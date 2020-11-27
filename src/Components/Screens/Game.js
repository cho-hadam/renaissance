import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../css/game.css";
import gameData from "../../data/game_data.json";

import foodImg1 from "../../assets/images/game/1.png";
import foodImg2 from "../../assets/images/game/2.png";
import foodImg3 from "../../assets/images/game/3.png";
import foodImg4 from "../../assets/images/game/4.png";
import foodImg5 from "../../assets/images/game/5.png";
import foodImg6 from "../../assets/images/game/6.png";
import foodImg7 from "../../assets/images/game/7.png";
import foodImg8 from "../../assets/images/game/8.png";
import foodImg9 from "../../assets/images/game/9.png";
import foodImg10 from "../../assets/images/game/10.png";
import foodImg11 from "../../assets/images/game/11.png";
import foodImg12 from "../../assets/images/game/12.png";

const gameImages = [
  foodImg1,
  foodImg2,
  foodImg3,
  foodImg4,
  foodImg5,
  foodImg6,
  foodImg7,
  foodImg8,
  foodImg9,
  foodImg10,
  foodImg11,
  foodImg12,
];

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(250);
  let history = useHistory();

  const clickButtonHandle = (evt) => {
    const clickedText = evt.target.innerText;
    if (clickedText === gameData[currentIndex].answer) {
      alert("정답입니다!");
      setScore(score + 250);
    } else {
      alert("틀렸습니다😥");
    }

    console.log(score);

    if (currentIndex < gameData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      history.push("/Game/End", { score: score });
    }
  };

  return (
    <main id={"GameContainer"}>
      <section className={"GameRoundBox"}>
        <h1>사진을 보고 가게를 고르세요</h1>
        <div className={"GameContentContainer"}>
          <div className={"GameLeftContents"}>
            <img src={gameImages[currentIndex]} alt="game image" />
          </div>
          <div className={"GameRightContents"}>
            {gameData[currentIndex].examples.map((example, index) => (
              <button
                key={index}
                className={"BtnAnswer"}
                onClick={clickButtonHandle}
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Game;
