import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import "../../css/game.css";
import gameData from "../../data/game_data.json";

import foodImg from "../../assets/images/game/toppokki.png";

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  let history = useHistory();

  const clickButtonHandle = (evt) => {
    const clickedText = evt.target.innerText;
    if (clickedText === gameData[currentIndex].answer) {
      setScore(score + 1);
    }

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
            <img src={foodImg} alt="test" />
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
