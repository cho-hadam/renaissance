import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "../../css/gameEnd.css";

function GameEnd() {
  let location = useLocation();
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(location.state.score);
  }, []);

  return (
    <main id={"GameEndContainer"}>
      <section className={"GameEndContents"}>
        <h1>SCORE</h1>
        <span>{score}</span>
      </section>
    </main>
  );
}

export default GameEnd;
