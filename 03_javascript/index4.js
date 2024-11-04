/** 1. if
 * if(조건식){
    조건식이 참일 때 실행할 문장 
}
 */

if(5>3){
    console.log('조건이 참 입니다.')
}

// let number = Number(prompt('숫자를 입력해주세요.'));
// if(number>10){
//     console.log('입력받은 수가 10보다 큽니다.')
// }else{
//     console.log('입력받은 수가 10과 같거나 작습니다.')
// }

// if(number>10){
//     console.log('입력받은 수가 10보다 큽니다.')
// }else if(number===10){
//     console.log('입력받은 수가 10입니다.')
// } else{
//     console.log('입력받은 수가 10과 작습니다.')
// }

// 90점 이상은 A
// 80점 이상은 B
// 70점 이상은 C
// 그 아래는 모두 F

// let userInput= Number(prompt('점수를 입력해주세요.'));
let userInput = 100
if(userInput >= 90 && userInput <= 100){
    console.log('A입니다.')
} else if(userInput>=80){
    console.log('B입니다.')
} else if(userInput>=70){
    console.log('C입니다.')
} else{
    console.log('F입니다')
}

console.log('---실습---')
let userInput2=20
// let userInput2=Number(prompt('나이를 입력해주세요.'));
if(userInput2>=20){
    console.log('성인')
} else if(userInput2>=17){
    console.log('고등학생')
} else if(userInput2>=14){
    console.log('중학생')
} else if(userInput2>=8){
    console.log('초등학생')
} else{
    console.log('유아')
}


/*조건문 중첩 */
let userId= 'user01'
let userPw= '1234qwer'

function loginUser(){
    let promptId=prompt('아이디를 입력 해 주세요.')
    let promptPw=prompt('비밀번호를 입력 해 주세요.')
    if(userId === promptId){
        if (userPw === promptPw){
            console.log('로그인 성공')
            alert("안녕하세요 "+userId+"님")
        } else{
            alert("비밀번호가 틀렸습니다.")
        }
    } else if(promptId===''){
        alert('아이디를 입력하지 않았습니다.')
    } else{
        alert('아이디가 틀렸습니다.')
    }
}
// loginUser()

// 2. switch문

// let a = Number(prompt('숫자를 입력 해 주세요.'))
let a=5
// switch의 괄호에는 조건이 아닌 값이 들어감
switch(a){
    // case에는 값에 대한 경우가 들어감
    case 3:
        console.log('a가 3입니다.')
        break;
    case 4:
        console.log('a가 4입니다.')
        break;
    case 5:
        console.log('a가 5입니다.')
        break;
    default:
        console.log('a가 어떤 숫자인지 알 수 없습니다.')
}

// 3. 삼항연산자

let num = 5
if(num%2===1){
    console.log('홀수')
}else{
    console.log('짝수')
}

// 조건? 참일때 : 거짓일 때
num%2===1?console.log('홀수'):console.log('짝수')

let fruit='banana'
const value = fruit==="banana"?"yellow":"red"
console.log(value)

let value2;
if(fruit==="banana"){
    value2="yellow"
}else{
    value2="red"
}
console.log(value2)

console.log('---실습---')
let now = new Date().getHours();
now<=12?console.log('오전'):console.log('오후')
// console.log(now)

console.log('---실습---')
let theNum = Number(prompt('숫자를 입력 해 주세요.'))
if(theNum<=10000){
for(let i=1; i<=10000; i++){
    if(i%13===0&&i%2===1){
        console.log(i)
    }
}
}

console.log('---실습---')
let thesum=0;
for(let i=0; i<=100; i++){
    if(i%5===0||i%2===0){
        thesum=thesum+i
    }
}
console.log(thesum)
