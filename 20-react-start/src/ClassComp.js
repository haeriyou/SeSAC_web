import { Component } from "react";

class ClassComp extends Component {
  render() {
    const name = "class";
    return (
      <h2 style={{ color: "blue" }} onClick={() => alert("Clicked!")}>
        {name}형 컴포넌트 사용
      </h2>
    );
  }
}

export default ClassComp;
