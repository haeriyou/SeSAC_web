// class: 객체를 만들때 사용하는 틀
/**
 * 속성: 만들어진 연도, 집의 이름, 창문의 갯수
 * 함수(메소드): 건물 나이 메소드, 창문의 갯수 출력 메소드
 */

class House{
    constructor(name, year, window){
        this.name = name;
        this.year = year;
        this.window = window;
    }

    getAge(){
        console.log(`${this.name}은 건축한지 ${2024 - this.year}년 되었어요.`)
    }

    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다.`)
    }
}

const house1 = new House('old', 1789, 1)
house1.getAge()
house1.getWindow()
console.log(house1.name)

const house2 = new House('자이', 2015, 10)
house2.getAge()
house2.getWindow()

console.log('=======상속=======')
// Apartment가 House에 포함되는 관계일 때 상속을 사용한다
class Apartment extends House{
    constructor(name, year, window, floor, windowMaker){
        super(name, year, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    // 메소드 추가
    getAptInfo(){
        return `${this.year}년에 지어진 ${this.name}. 총 층수는 ${this.floor}층이고, 창문의 갯수는 ${this.window}개 입니다.`
    }

    // overriding (메소드 재정의)
    // 부모 클래스의 메소드 이름을 똑같이 쓰고 싶지만 내용은 다르게 만들고 싶을 때
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다. ${this.windowMaker}에서 만들었습니다.`)
    }
}

const apt1 = new Apartment('raemian', 2023, 6, 19, 'KCC')
apt1.getAge()
apt1.getWindow()
console.log(apt1.getAptInfo()) // return이므로 console.log에 넣어야 한다.
console.log(apt1)
