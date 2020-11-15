import React from "react";
import "../../css/game.css";


const backgroundColor = {
  backgroundColor: "#F5832D",
};

//class Game extends React.Component {
//  render() {
//    return(
//      <main style={backgroundColor}>
//        <section className="rounded">
//          <h1>
//            사진을 보고 가게를 고르세요
//          </h1>
//          <section className = "LeftCentent">
//          </section>
//        </section>
//      </main>
//    )
//  }}
function Game() {
  return(
   <main style = {backgroundColor}>
     <section className="rounded">
      <h1>사진을 보고 가게를 고르세요</h1>
      <section className = "LeftCentent">

      </section>
      <section className = "RightCentent">
        <button className = {"Btnanswer"}>안녕</button><br/>
        <button className = {"Btnanswer"}>안녕</button><br/>
        <button className = {"Btnanswer"}>안녕</button><br/>
        <button className = {"Btnanswer"}>안녕</button><br/>
      </section>
     </section>
   </main>
  )
}

export default Game;
