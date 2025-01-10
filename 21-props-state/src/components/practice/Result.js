export default function Result(props) {
  const { content, fruit, color, background } = props.data;
  //   console.log("data", data); // Object
  return (
    <div>
      <img src={`/${fruit}.jpg`} width={100} height={100} />
      {/* 백틱을 넣는 것 또한 JS 문법이므로 중괄호로 감싼다 */}
      <p
        style={{
          backgroundColor: background,
          color: color,
          width: "100px",
          height: "50px",
          textAlign: "center",
          lineHeight: "50px",
        }}
      ></p>
    </div>
  );
}
