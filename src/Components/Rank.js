import React from "react";
import "../css/rank.css";

const backgroundColor = {
  backgroundColor: "#F5832D",
};

class Scroll extends React.Component {
  
}



class Rank extends React.Component {
  render() {
    return(
      <main style={backgroundColor}>
        <div>
          <div className="#">
            {this.props.dodoTak.map(function(app){
              return <div/>
            })}
          </div>
        </div>
      </main>
    )
  }
}

export default Rank;
