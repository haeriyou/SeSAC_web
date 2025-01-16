import { useState } from "react";

export default function Practice1() {
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안뇽",
    },
    {
      writer: "지민",
      title: "하이하이",
    },
    {
      writer: "희수",
      title: "멋쟁이",
    },
  ]);
  const [inputTitle, setTitle] = useState(""); // 제목 등록 input
  const [inputWriter, setWriter] = useState(""); // 작성자 등록 input

  const addContent = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setTitle("");
    setWriter("");
  };

  // 엔터로 입력
  const enterInput = (e) => {
    if (e.key == "Enter") {
      addContent();
    }
  };

  return (
    <>
      <form>
        <label htmlFor="writer">작성자: </label>
        <input
          type="text"
          name="writer"
          id="writer"
          value={inputWriter}
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        {"  "}
        <label htmlFor="title">제목: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={inputTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={enterInput}
        />
        {"  "}
        <button type="button" onClick={addContent}>
          작성
        </button>
      </form>
      <table border={1} style={{ margin: "30px auto", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((value, idx) => {
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
