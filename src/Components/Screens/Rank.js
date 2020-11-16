import { render } from "@testing-library/react";
import React from "react";
import "../../css/rank.css";

const backgroundColor = {
  backgroundColor: "#F5832D",
};



function ScoreList(props) {
 
    return (
      <div>
        <div>
          {props.user.rank}
        </div>
        <div>
          {props.user.name}
        </div>
        <div>
          {props.user.score}
        </div>
      </div>
    );
  
}

function Rank() {
    return(
      <main style={backgroundColor}>
        <div className="ScrollBox">
          
        </div>    
        <div className="myScore">
          <div className="myscore_rank">
            58위
          </div>
          <div className="myscore_name">
            오지민
          </div>
          <div className="myscore_score">
            3453점
          </div>
      </div>
      </main>
    )
  
}

export default Rank;
