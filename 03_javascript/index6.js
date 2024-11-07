// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice, replace, replaceAll, repeat, split

let str1="Strawberry Moon"
let str2="   Strawberry Moon"

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0] + str1[11])

// Sonny 단어 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

//length 속성 확인
console.log(str1.length)
console.log(str2.length)

//매서드 사용해보기
// trim, toUpperCase, toLowerCase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim())
console.log(str2.trim().length)

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice
let fruit = "applemango"
// indexOf: 내가 찾고 싶은 문자열의 인덱스 반환
console.log(fruit.indexOf("e")) // 4
console.log(fruit.indexOf("a")) // 0
console.log(fruit.indexOf("apple")) // 0: 맨 앞 문자인 'a'기준
console.log(fruit.indexOf("mango")) // 5
console.log(fruit.indexOf("z")) // -1: 없는 문자열을 찾으려 해서 -1 반환

console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10)) // ''

console.log(fruit.slice(5)) // mango: m부터 끝까지
console.log(fruit.slice(3,6)) // lem: 3번 index 포함, 6번 index 미포함
console.log(fruit.slice(-1)) // o
console.log(fruit.slice(-4)) // ango

// replace, replaceAll
let msg1="Wow~ it is so amazing!!! Wow"
console.log(msg1.replace("Wow","Hey~~~")) // 뒤에있는 Wow는 대체 할 수 없다.
console.log(msg1.replaceAll("o", "OO"))

let date="2024.11.06"
// YYYY-MM-DD
console.log(date.replaceAll(".", "-"))
date = date.replaceAll('.','-')
console.log(date)

let hello="hello"
console.log(typeof hello)

let hello2=hello.split()
console.log(hello2) // ['hello']

hello2=hello.split("")
console.log(hello2) // (5) ['h', 'e', 'l', 'l', 'o']

hello2=hello.split('e')
console.log(hello2) //(2) ['h', 'llo']
console.log(typeof hello2) // object

// ['2024', '11', '06']
date=date.split('-')
console.log(date) // (3) ['2024', '11', '06']

// ---------------- 배열 -------------------
console.log('----array method----')
let arr1=[1,2,3,4,5]
let arr2=["quokka","rabbit","puppy","hamster"]

arr1[5]=6 // 맨 끝의 indexing 번호를 알고 있어야해서 불편함.
arr1[8]=8
console.log(arr1)
arr1=[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop()) // 제거하는 값 반환, 실제 arr에서 삭제
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)
console.log(arr2.shift()) // 제거하는 값 반환, 실제 arr에서 삭제
console.log(arr2)

// 배열.includes(요소) 배열에 요소가 있는지 없는지 확인
console.log(arr2.includes("cat")) // false
console.log(arr2.includes("quokka")) // true

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) // 3, 요소가 몇 번 인덱스에 있는지

// reverse(), 순서 뒤집기
arr1.reverse() // 기존 배열이 변경됨
console.log(arr1)

// join('') ( <-> split):배열에서 문자열로 병합
str1=arr1.join()
console.log(str1) // join 안에 아무것도 안쓰면 배열 안의 컴마까지 같이 문자열로 반환됨
str1=arr1.join('')
console.log(str1)

// for of, forEach
let arr3 =[1,5,3,4,5]
let alphabets=['a','b','c','d','e','f']

// 기본 for문
for(let i=0; i<arr3.length;i++){
    console.log(arr3[i])
}

// for of문
for(let el of arr3){
    console.log(el)
}

// forEach(익명함수)
// forEach(function(a[,b,c]))
arr3.forEach(function(num,i,arr){
    console.log("요소", num)
    console.log("배열의 인덱스", i) // 배열의 index
    console.log("arr3", arr)
    console.log("------")
})

arr3.forEach((el)=>{
    console.log(el)
})

arr2=["quokka","rabbit","puppy","hamster"] // 재할당
// filter, map, find
// 매개변수로 들어가는 익명함수에 리턴값이 필수
console.log('----filter----')
// return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six=arr2.filter(function(el){
    return el.length ===6    
})
console.log(six) // (2) ['quokka', 'rabbit']

console.log('----find----')
let six2=arr2.find(function(word){
    return word.length===6
})
console.log(six2) // quokka

console.log('----map----')
let arr4=[1,2,3,4,5]
let multiArr=arr4.map(function(number){
    return number*3
})

multiArr=arr4.map((number)=> number*3)

console.log(multiArr) // (5) [3, 6, 9, 12, 15]

// object 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

for(let area in areaNum){
    console.log(area) // key를 한 바퀴 순회, key가 문자열로 반환중
    // 값에 접근 하려면? -> 대괄호 접근법으로만 사용 가능
    console.log(areaNum[area])
}

// 배열문 반복문 실습
let sumPrac=[]
for(let i = 1; i <= 100; i++){
    sumPrac.push(i)    
}
console.log(sumPrac)

console.log('for문')
let prac1=0;
for(let i=0; i<sumPrac.length;i++){
    prac1+=sumPrac[i]
}
console.log(prac1)

console.log('forof 문')
let prac2=0;
for(i of sumPrac){
    prac2+=i
}
console.log(prac2)

console.log('forEach 문')

let prac3=0;
sumPrac.forEach(function(i){
    prac3+=i;
})
console.log(prac3)

let fruits1=["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2=["수박", "사과", "파인애플", "참외", "오렌지", "망고"]

let same = [];
let diff = [];

for (let i = 0; i < fruits1.length; i++) {
    if (fruits2.includes(fruits1[i])) {
        same.push(fruits1[i]);
    } else {
        diff.push(fruits1[i]);
    }
}
console.log("Same:", same);
console.log("Diff:", diff);