import React from "react";
import "../../css/rank.css";

const backgroundColor = {
  backgroundColor: "#F5832D",
};

class Scroll extends React.Component {
  
}



class Rank extends React.Component {
  render() {
    return(
      <main style={backgroundColor}>
        <div className="ScrollBox">
          {/* {this.props.rank.map(()=>{
              return <div/>
            })} */}
        </div>      
      </main>
    )
  }
}

export default Rank;
