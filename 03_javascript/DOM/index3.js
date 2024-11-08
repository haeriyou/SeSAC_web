/**
 * 동작의 종류: click, dbclick, scroll, change, submit, etc.
    - addEventListener(동작의 종류, function(){})
    - <태그 onchange="함수의 이름()" onclick="함수의 이름"></태그>
        on[동작의 종류] 속성으로 이벤트 제어 가능
 */

const btn1=document.querySelector('.btn--black') // class 선택이면 맨 앞에 period꼭 넣기
const btn2=document.querySelector('.btn--green')
const btn3=document.querySelector('.btn--blue')
const btn4=document.querySelector('.btn--red')

// btn1.addEventListener("동작의이름",function(){동작})
btn1.addEventListener("click",function(){ //function() -> 익명 함수
    console.log('버튼1이 클릭 되었습니다!!')
    alert('버튼1을 클릭하셨군요!!')
})

btn1.addEventListener("mouseover", function(){
    // this는 자기 자신을 가리킴
    // btn1.style.backgroundColor="aqua"
    this.style.backgroundColor="aqua"
})

// ** btn2를 눌렀을 때, div를 자식으로 붙이기
const container=document.getElementById('container')

btn2.addEventListener("click", ()=>{
    let div = document.createElement('div')
    div.innerText="Hi!"
    div.style.backgroundColor="pink"

    // 눌렀을때 container에 붙이기
    container.append(div)
})

// ** btn3
// 만들어진 div의 배경색 변경
// 이벤트가 발생했을때만 작동이 되도록 함수(changeColor)호출 시 괄호 생략, 괄호 작성시 즉시 호출
btn3.addEventListener('click', changeColor) 
// btn4.addEventListener('click', changeColor) // 재사용 할 수 있는 함수가 만들어짐.
function changeColor(){
    const divs =  document.querySelectorAll('#container div')
    // container의 자식인 div들이 선택되었음
    for (let div of divs){
        div.style.backgroundColor="skyblue"
    }
    // 마지막 요소만 노랑색으로 변경
    // divs.append.style.backgroundColor="yellow"
}

// ** btn4
// 배경색 노란색으로 변경, 글자색 검정색으로 변경
// btn3.addEventListener("click",changeBtnColor)
btn4.addEventListener("click",changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor="yellow"
    this.style.color="#000"
}

// ** btn5
// alert창 띄우기
// html에 연결되어있음
function sayHi(){
    alert('버튼5 안녕하세요!')
}

// =======================================
const btn=document.querySelector('button')
const input=document.querySelector('input')

/** 1. [클릭 이벤트] */
btn.addEventListener('click', function(event){ // function(매개변수), 매개변수 이름은 상관 없다.
    // 클릭 이벤트에 관한 정보 (event 객체)
    console.log(event)

    // 어떤 요소가 클릭 되었는지 확인 가능
    console.log(event.target)
})

// =======================================
/** 2. [키보드 이벤트] */
input.addEventListener('keydown', function(event){
    // console.log(event)
    
    // 방향키 아래, 위, 왼쪽, 오른쪽
    // console.log(event.code)
    // console.log(event.key)
    // console.log(event.keyCode)
    if(event.code==="ArrowLeft"){
         console.log('왼쪽 방향키 눌렸습니다.')
            } else if(event.code==="ArrowRight"){
                console.log('오른쪽 방향키 눌렸습니다.')
            } else if(event.code==="ArrowUp"){
                console.log('위쪽 방향키 눌렸습니다.')
            }else if(event.code==="ArrowDown"){
                console.log('아래쪽 방향키 눌렸습니다.')
            } else{
                console.log('방향키가 아닌 키가 눌렸습니다.')
            }
})

// =======================================
/** 3. [scroll 이벤트] */
// console.log(window) // 브라우저 창 자체를 의미

window.addEventListener('scroll',(event)=>{
    // console.log(event)
    // console.log(event.target)
    console.log(scrollY)

    // scrollY가 800에서 div opacity가 1이 되도록
    if(scrollY > 800){
        document.querySelector('.pos').style.opacity="1"
    }
})

// =======================================
// 폼 이벤트
/** 4. [submit] */

const todoForm=document.querySelector('#todo-form') // form 태그
const todos=document.querySelector('.todos') // ul 태그

todoForm.addEventListener('submit',(e)=>{
    // 폼이 제출되는것을 취소. 이벤트 전달을 막는 방법 (새로고침을 막는다)
    e.preventDefault();
    console.log('submit')

    // 폼 내부의 input창 선택
    const todoInput=document.querySelector('input[name="todo"]') // []속성선택자
    console.dir(todoInput) // 요소가 가지고 있는 데이터를 출력
    // console.log(todoInput.value)

    // (!!!) 공백으로 들어오는 문자는 추가되지 않도록
    const todo=todoInput.value.trim() // value는 속성 이름과 같다.

    console.log('todo: '+todo) // '""
    if(todo !==""){
    // 선택된 ul 태그의 자식으로 <li>todo</li> 붙이기
    const li=document.createElement('li')
    li.textContent=todo
    todos.append(li)
    } else{
        alert('오늘의 할 일을 작성 해 주세요!')
    }

    todoInput.value="" // textbox를 빈 값으로 만든다
})

// =======================================
/** 5. [change 이벤트] */
const chgInput=document.querySelector('#change-input')
chgInput.addEventListener('change', function(){
    console.log('changed!')
})

chgInput.addEventListener('input', function(){
    // input창의 value에 변경이 발생되면 일어나는 이벤트
    console.log('changing!')
    
    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value
})