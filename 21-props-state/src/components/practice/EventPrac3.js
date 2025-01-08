import { useState } from "react";

export default function EventPrac3() {
  const [text, setText] = useState("안녕하세요");
  const [btn, setBtn] = useState("사라져라");

  function hideBtn() {
    setText("");
    setBtn("보여라");
  }

  return (
    <div>
      <span>{text}</span>
      <br />
      <button onClick={hideBtn}>{btn}</button>
    </div>
  );
}
