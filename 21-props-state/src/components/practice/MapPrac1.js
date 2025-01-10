import { useState } from "react";

export default function MapPrac() {
  const [list, setList] = useState([
    { id: "1", name: "코디", email: "codi@gmail.com" },
    { id: "2", name: "포터", email: "harrypotter@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const addUser = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      name: name,
      email: email,
    });
    setList(newList);
    setName("");
    setEmail("");
  };

  // 더블클릭 삭제
  const deleteUser = (id) => {
    const newUser = list.filter((name) => {
      return name.id !== id;
    });
    setList(newUser);
  };

  // 엔터로 입력
  const enterInput = (e) => {
    if (e.key == "Enter") {
      addUser();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={email}
        onDoubleClick={deleteUser}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyDown={enterInput}
      />
      <button onClick={addUser}>등록</button>
      <ul>
        {list.map((el) => {
          return (
            <li
              onDoubleClick={() => deleteUser(el.id)}
              style={{ fontWeight: 700 }}
            >
              {el.name}: {el.email}
            </li>
          );
        })}
      </ul>
    </>
  );
}
