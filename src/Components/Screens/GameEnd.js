import React from "react";

const styles = {
  backgroundColor: {
    backgroundColor: "#F5832D",
  },
  contents: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};

class List extends React.Component {
  render() {
    return (
      <main style={styles.backgroundColor}>
        <section style={styles.contents}>
          <div className={"TopContent"}>
            <h1>SCORE</h1>
            <span>2019</span>
          </div>
          <div className={"BottomContent"}>
            <input type={"text"} />
            <button className={"BtnSubmit"}>확인</button>
          </div>
        </section>
      </main>
    );
  }
}

export default List;
