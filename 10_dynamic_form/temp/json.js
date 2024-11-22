// JSON
// Javascript Object Notation
/**
 * {
 *  "name": "allie",
 *  "married": "false",
 *  family: {father:'dd', mother:'dd'}
 * }
 */

const car = `{
    "model":"아이오닉6",
    "company":"현대",
    "price":50000000,
    "year":2023,
    "isElectric":true,
    "option":["side mirror","smart sensor"]
}
`;
console.log(typeof car);
// JSON.parse(): JSON을 object로 변환
const obj = JSON.parse(car);
console.log(obj);
console.log(obj.model);
console.log(obj.option);

// JSON.stringify(): object에서 JSON으로 변환
const carJson = JSON.stringify(obj);
console.log(carJson);
console.log(typeof carJson);

// stringify()의 세번째 인자: 들여쓰기할 공백의 크기
const carJson2 = JSON.stringify(obj, null, 5);
console.log(carJson2);
console.log(carJson2.model); // undefined (JSON은 문자열)
