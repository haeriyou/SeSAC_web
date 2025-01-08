import { Component } from "react";

export default class ClassState extends Component {
  // Class 형에서는 state가 객체형으로 관리 된다.
  // render() 함수 위에서 state 선언
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        <p>{banana}</p>
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경! (Class 형)
        </button>
      </div>
    );
  }
}
