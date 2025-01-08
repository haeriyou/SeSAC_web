import { useState } from "react";

export default function ChangeObj({ objArr }) {
  const [num, setNum] = useState(0);
  const changeMember = () => {
    if (setNum === objArr.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  return (
    <>
      <span>이름: {objArr[num].name}</span>
      <br />
      <span>나이: {objArr[num].age}</span>
      <br />
      <span>별명: {objArr[num].nickName}</span>
      <br />
      <button onClick={changeMember}>멤버 바꾸기</button>
    </>
  );
}
