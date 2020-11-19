import React, { useEffect, useState } from "react";

import "../../css/rank.css";

// Image Medal
import GoldImage from "../../assets/images/ranking/gold-medal.png";
import SilverImage from "../../assets/images/ranking/silver-medal.png";
import BronzeImage from "../../assets/images/ranking/bronze-medal.png";

function TopRank(props) {
  return (
    <div className={"TopRank"}>
      <img className={"ImageMedal"} src={props.image} alt={props.rank} />
      <div className={props.rank === 1 ? "TopRankBox First" : "TopRankBox"}>
        <span className={"TextName"}>{props.name}</span>
        <span className={"TextScore"}>{props.score}점</span>
      </div>
    </div>
  );
}

function RankItem(props) {
  return (
    <div className={"BottomRankBox"}>
      <span>{props.rank}위</span>
      <span>{props.name}</span>
      <span>{props.score}점</span>
    </div>
  );
}

function Rank() {
  const [myRecord, setMyRecord] = useState({});
  useEffect(() => {
    setMyRecord({
      name: "오지민",
      rank: 48,
      score: 120,
    });
  }, []);

  return (
    <main id={"RankContainer"}>
      <div className={"TopRankContainer"}>
        <TopRank image={SilverImage} rank={2} name={"백민세"} score={4210} />
        <TopRank image={GoldImage} rank={1} name={"오지민"} score={4410} />
        <TopRank image={BronzeImage} rank={3} name={"조하닮"} score={4110} />
      </div>
      <div className={"BottomRankContainer"}>
        <RankItem rank={4} name={"오형민"} score={3800} />
        <RankItem rank={5} name={"공은정"} score={3400} />
        <RankItem rank={5} name={"공은정"} score={3400} />
        <RankItem rank={5} name={"공은정"} score={3400} />
        <RankItem rank={5} name={"공은정"} score={3400} />
      </div>
      <div className={"MyRankContainer"}>
        <span className={"TextMyScore"}>{"내 기록"}</span>
        <div className={"NameRankContainer"}>
          <span>{myRecord.name} </span>
          <span>({myRecord.rank}위)</span>
        </div>
        <span className={"MyScore"}>{myRecord.score}점</span>
      </div>
    </main>
  );
}

export default Rank;
