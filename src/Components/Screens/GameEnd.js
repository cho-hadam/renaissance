import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../../css/gameEnd.css";

function GameEnd() {
  let location = useLocation();
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(location.state.score);
    setScore(location.state.score);
  }, []);

  return (
    <main id={"GameEndContainer"}>
      <section className={"GameEndContents"}>
        <div className={"TopContent"}>
          <h1>SCORE</h1>
          <span>{score}</span>
        </div>
        <div className={"BottomContent"}>
          <input
            className={"NameInput"}
            type={"text"}
            placeholder={"이름을 입력하세요"}
          />
          <button className={"BtnSubmit"}>{"확인"}</button>
        </div>
      </section>
      <button className={"BtnExceptRank"}>{"랭킹 참여 안 하기"}</button>
    </main>
  );
}

export default GameEnd;
