export default function NameAnimal() {
  const name = "호두";
  const animal = "강아지";
  const a = 300;
  const b = 200;
  return (
    <div>
      <h2>
        제 반려 동물의 이름은 {name}입니다.
        <br></br>
        {name}는 {animal}입니다.
      </h2>
      <h2>{a > b && "a가 b보다 큽니다."}</h2>
      <br></br>
      <h2>{3 + 5 == 8 ? "정답입니다!" : "오답입니다!"}</h2>
    </div>
  );
}
