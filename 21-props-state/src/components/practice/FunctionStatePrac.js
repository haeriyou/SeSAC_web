import { useState } from "react";

export default function FunctionStatePrac() {
  const [number, setNum] = useState(0);
  // useState(0); 함수형 컴포넌트에서만 사용 가능
  const increase = () => {
    setNum(number + 1);
  };
  const decrease = () => {
    setNum(number - 2);
  };
  return (
    <div>
      <p>숫자: {number}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
