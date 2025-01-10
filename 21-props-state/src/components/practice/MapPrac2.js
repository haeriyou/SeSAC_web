import { use, useState } from "react";

export default function MapPrac2() {
  const [comment, setComment] = useState([
    {
      writer: "승철",
      title: "화이팅",
    },
    {
      writer: "정한",
      title: "하니해",
    },
    {
      writer: "지수",
      title: "화이팅",
    },
  ]);
  const [inputTitle, setTitle] = useState(""); // 제목 등록 input
  const [inputWriter, setWriter] = useState(""); // 작성자 등록 input
  const [inputSearch, setInputSearch] = useState(""); // 검색어 input

  const [result, setResult] = useState([]); // 검색결과에 대한 배열
  const [searchType, setSearchType] = useState("writer");

  const addContent = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]);

    setTitle("");
    setWriter("");
  };

  // 검색을 실행하는 함수
  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      //   console.log(item);
      //   console.log(item[searchType].includes(inputSearch)); // includes -> 포함 여부를 T/F로 반환
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    setResult(searchResult); // 검색어 결과 설정
    setInputSearch("");
  };

  // search type에 따라서 어떤 검색을 할지 결정
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
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
        />
        {"  "}
        <button onClick={addContent}>작성</button>
      </form>
      {/* 검색 폼 */}
      <form>
        <select name="type" onChange={selectSearchType}>
          <option value={"writer"}>작성자</option>
          <option value={"title"}>제목</option>
        </select>{" "}
        <input
          type="text"
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
          placeholder="검색어를 입력 해 주세요."
          value={inputSearch}
          name="search"
        />{" "}
        <button type="button" onClick={searchComment}>
          검색
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
      <h4>검색 결과</h4>
      {result.length == 0 ? (
        <h3>검색 결과가 없어요🥲</h3>
      ) : (
        <table border={1} style={{ width: "500px", margin: "0 auto" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, i) => {
              return (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
