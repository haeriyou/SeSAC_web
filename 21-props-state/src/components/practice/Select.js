export default function Select({ setData }) {
  /**
 * { fruit: "apple",
    background: "white",
    color: "gray",
    content: "text", }
 * 
 */

  return (
    <div>
      {/* {select 3개} */}
      과일:{" "}
      <select
        onChange={(e) => {
          // console.log("target", e.target);
          // console.log("current", e.currentTarget);
          // console.log("current", e.target.value);

          setData((prevState) => {
            return { ...prevState, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((prevState) => {
            return { ...prevState, background: e.target.value };
          });
        }}
      >
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="pink">pink</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          const color = e.target.value;
          setData((prevState) => {
            return { ...prevState, color };
          });
        }}
      >
        <option value="black">black</option>
        <option value="white">white</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="pink">pink</option>
      </select>
    </div>
  );
}
