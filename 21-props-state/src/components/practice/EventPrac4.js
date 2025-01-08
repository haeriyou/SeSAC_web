import { useState } from "react";

export default function EventPrac4() {
  const [number, setNum] = useState(0);
  const [text, setEmoji] = useState("🌱");
  const increase = () => {
    setNum(number + 1);
  };

  const decrease = () => {
    setNum(number - 1);
  };

  return (
    <>
      <p>
        {number} {number > 7 ? "😫" : "🌱"}
      </p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </>
  );
}
