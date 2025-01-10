import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alphabet: "a" },
    { id: 2, alphabet: "b" },
    { id: 3, alphabet: "c" },
    { id: 4, alphabet: "d" },
    { id: 5, alphabet: "e" },
  ]);
  const [input, setInput] = useState("");
  const addAlphabet = () => {
    const newList = list.concat({
      id: list.length == 0 ? 1 : list[list.length - 1].id + 1,
      alphabet: input,
    });
    setList(newList);
    setInput("");
  };
  // input 태그에 대고 엔터를 눌렀을 때 등록이 되도록
  const activeEnter = (e) => {
    // console.log(e.key); // 키보드의 정보
    if (e.key == "Enter") {
      addAlphabet();
    }
  };

  // 해당 태그에 더블클릭을 했을 때 삭제 되도록
  const deleteAlphabet = (id) => {
    const newAlphabet = list.filter((alphabet) => {
      return alphabet.id !== id;
    });
    setList(newAlphabet);
  };

  return (
    <div>
      <h2>alphabet</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={activeEnter}
        onDoubleClick={deleteAlphabet}
      />
      <button onClick={addAlphabet}>추가</button>
      <ol>
        {list.map((el) => {
          return (
            <li key={el.id} onDoubleClick={() => deleteAlphabet(el.id)}>
              {el.alphabet}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
