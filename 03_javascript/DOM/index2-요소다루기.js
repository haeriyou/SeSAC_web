/** 1. 태그 내부 내용
 * 
- innerText
- textContent
- innerHTML
 */

let div1 = document.getElementById('div1')
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     '
//2칸 이상의 공백 문자 제거, 앞 뒤로 공백 문자 제거
console.log(div1.innerText)

div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;'
console.log(div1.textContent)

/** 2. 속성에 접근
 - 요소.속성명
 - getAttribute(): 속성값 가져오기
 - setAttribute(): 속성값 설정하기
 */

 // pooh, naver아이디
 let naver = document.getElementById('naver')
 console.log(naver)

// naver링크를 google로 바꾸기
// naver.setAttribute("속성이름", "바꿔줄 속성 값")
naver.setAttribute("href","http://www.google.com") // 속성값설정
console.log(naver.href) // naver의 href값 확인
console.log(naver.getAttribute("href"))

document.querySelector('#pooh') // css 선택자를 넣는다.
console.log(document.querySelector('#pooh').src) // img 태그가 잘 뜨는지 확인
document.querySelector('#pooh').alt="푸사진" // alt 속성값 재설정

/** 3. CSS 변경 */
let h1 = document.querySelector('h1') // getElementById는 지양한다.
let list = document.querySelectorAll('li') // querySelector은 맨 위에것만 가져온다.
// console.log(h1)
// console.log(list) // 잘 가져오는지 확인.

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){ 
    // el.style.color="#fff"
    // el.style.backgroundColor="pink"
    // el.style.fontSize="1.3rem" 
    el.classList.add('friends') //css 파일안에 미리 설정해놓고 friends class만 추가하는 방식
}  // el로 지정해서 list의 각 배열(element)에 접근한다. 

h1.classList.add('add-h1') // 클래스 추가
h1.classList.remove('add-h1') // 클래스 제거// add remove toggle 안에는 class이름이 들어간다
h1.classList.toggle('add-h1') // 현재 상태와 반대 상태로 만들어 줌

// 클래스가 있는지 없는지 확인 >> true, false 반환
console.log(h1.classList.contains('add-h1')) // add-h1이 있는지 없는지 확인
console.log(h1.classList.contains('add-h2')) // add-h1이 있는지 없는지 확인
console.log(h1.classList) 

/** 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')

console.log('--자식 노드 접근--')
// 배열 형태로 가지고 옴
console.log(friends.children) // HTMLCollection(4) [li.friends, li#tigger.friends, li.friends, li.friends, tigger: li#tigger.friends]
console.log(friends.children[0]) // []배열에 접근

console.log('--부모 노드 접근--')
// 배열 형태가 아닌, 요소 자체를 가져온다.
console.log(tigger.parentNode)

console.log('--형제 노드 접근--')
// 배열 형태가 아닌 요소 자체를 가져온다.
console.log('이전 형제', tigger.previousElementSibling)
console.log('다음 형제', tigger.nextElementSibling)

/** 5. 노드 생성, 추가, 삭제 */
let container = document.querySelector('.container')

// 요소 생성
let p=document.createElement('p')
p.innerText="새로 추가된 p"
p.style.fontWeight="700"
p.style.background="red"
p.id="append-p"

// 요소 추가
console.log(p)

// 선택된 요소(container)의 맨 뒤 자식 요소로 추가됨.
container.append(p)

let p2 = document.createElement('p') // p tag 생성
let p3 = document.createElement('p')

p2.innerText="p2 태그" // innerHTML도 사용 가능
p3.textContent="p3 태그"
p2.classList.add('p-2')
p3.classList.add('p-3')

// container.append(p2)
// container.appendChild(p3)
container.append(p2, p3, "안녕하세요") // appendChild는 한번에 하나밖에 안됨, 문자열 추가 불가

// prepend(): 선택된 요소의 맨 앞 자식으로 추가
// friends = document.querySelector('#friends')
// li 태그를 만들고, "캉가", friends class 추가
let li=document.createElement('li')
li.textContent="캉가"
li.classList.add('friends')

friends.prepend(li)

console.log(h1)
// before()
let h3=document.createElement('h3')
h3.innerText="h3 tag"
h1.before(h3)
// after()
let h2=document.createElement('h2')
h2.innerText="h2 tag"
h1.after(h2)

// 요소 삭제! -> remove(), removeChild()
let firstLi=document.querySelector('li') // li 태그 하나만 집어온다.
let ul = firstLi.parentElement

// 삭제할요소.remove()
// firstLi.remove() // 선택된 요소가 삭제

ul.removeChild(firstLi)
// 부모요소.removeChild(삭제할 자식 요소)

// <div class="container"></div>
const parentDiv=document.querySelector('.container')

let div2=document.createElement('div')
let img2=document.createElement('img')


img2.setAttribute('src',"./img/img.jpg")
img2.alt="이요르 사진"

let span2=document.createElement('span')
span2.innerText="이요르"

div2.append(img2, span2)
parentDiv.append(div2)
