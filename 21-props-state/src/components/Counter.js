import { useState } from "react";

const Counter = () => {
  const [number, setNum] = useState(0);
  const increase = () => {
    setNum(number + 1);
  };
  const alertMsg = (msg) => {
    alert(`${msg}~ 현재 숫자는 ${number} 입니다.`);
  };

  const consoleMsg = (e, msg) => {
    console.log(`${msg}~ 현재 숫자는 ${number} 입니다.`);
    console.log(e.target);
  };

  const handleClick = (e) => {
    console.log("================");
    console.log(e.target); // span: 실제로 눌리고 있는 것
    console.log(e.currentTarget); // button: 지금 이벤트가 어디서 발생되고 있는지. (onClick을 건 위치)
  };

  return (
    <div>
      <h3>number counter</h3>
      <h5>{number}</h5>
      <button onClick={increase}>더하기</button>
      <button onClick={() => alertMsg("안녕하세요~")}>alert</button>
      <button
        onClick={(e) => {
          consoleMsg(e, "hellooo");
        }}
      >
        console 확인
      </button>
      <button onClick={handleClick}>
        <span>handle Click</span>
      </button>
    </div>
  );
};

export default Counter;
