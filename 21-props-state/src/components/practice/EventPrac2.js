import { useState } from "react";

export default function EventPrac2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, fontColor] = useState("black");

  function btnRed() {
    setText("빨간색 글씨");
    fontColor("red");
  }

  function btnBlue() {
    setText("파란색 글씨");
    fontColor("blue");
  }

  return (
    <div>
      <span style={{ color }}>{text} </span>
      <br />
      <button onClick={btnRed}>빨간색</button>
      <button onClick={btnBlue}>파란색</button>
    </div>
  );
}
