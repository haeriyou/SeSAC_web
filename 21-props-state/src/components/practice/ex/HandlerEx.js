import { useState } from "react";

export default function HandlerEx() {
  const [showWorld, setWorld] = useState(true);
  const changeBtn = () => {
    setWorld("Goodbye World");
  };

  return (
    <div>
      <div>{showWorld}</div>
      <button onClick={changeBtn}>클릭</button>
    </div>
  );
}
