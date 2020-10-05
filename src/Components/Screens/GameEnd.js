import React from "react";
import "../../css/gameEnd.css";

const styles = {
  backgroundColor: {
    backgroundColor: "#F5832D",
  },
};

class List extends React.Component {
  render() {
    return (
      <main style={styles.backgroundColor}>
        <section className={"Contents"}>
          <div className={"TopContent"}>
            <h1>SCORE</h1>
            <span>2019</span>
          </div>
          <div className={"BottomContent"}>
            <input type={"text"} placeholder={"이름을 입력하세요"} />
            <button className={"BtnSubmit"}>확인</button>
          </div>
        </section>
      </main>
    );
  }
}

export default List;
