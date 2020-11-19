import React from "react";

import "../../css/gameEnd.css";

function GameEnd() {
  return (
    <main id={"GameEndContainer"}>
      <section className={"GameEndContents"}>
        <div className={"TopContent"}>
          <h1>SCORE</h1>
          <span>2019</span>
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
