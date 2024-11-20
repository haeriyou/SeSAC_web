function goMart() {
  console.log("마트에 갑니다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    // 3초동안 고민하는 함수
    setTimeout(function () {
      console.log("고민 끝!");
      product = "콜라";
      price = "1500";
      resolve("구매 완료");
      // reject("구매 실패");
    }, 3000);
  });
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}원 지불`);
}

// 실행함수
async function exec() {
  try {
    goMart();
    await pickDrink();
    pay();
  } catch (err) {
    console.log(err);
  }
  // .then((result) => {
  //   // pickDrink가 끝나고 나서 실행되는 작업
  //   pay();
  //   console.log("result?", result);
  //   // result는 resolve로 전달된 값
  // })
  // .catch((err) => {
  //   console.log("err?", err);
  //   // reject로 전달된 값
  // })
  // .finally(() => {
  //   console.log("집으로 돌아갑니다.");
  // });
}
let price, product;
exec();

// 실습 Callback -> Promise

// 기존 콜백 코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

// // 콜백 함수 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "를 실행했구나");
//     hell(function (msg) {
//       console.log("여기는 " + msg);
//     });
//   });
// });

function callPromise(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name); // cb 대신 resolve로 값 넘기기
    }, 1000);
  });
}

function backPromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hellPromise() {
  // reject생략 가능
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// then ~ catch
// callPromise("kim")
//   .then((result) => {
//     console.log(result + "반가워");
//     return backPromise();
//   })
//   .then((txt) => {
//     // txt = 이전 then의 리턴값 = "back"
//     console.log(txt + "을 실행했구나");
//     return hellPromise();
//   })
//   .then((msg) => {
//     console.log("여기는 " + msg);
//   });

// async / await
async function execute() {
  const name = await callPromise("harry");
  console.log(name + "반가워");
  const back = await backPromise();
  console.log(back + "을 실행했구나");
  const hell = await hellPromise();
  console.log("여기는 " + hell);
}

execute();
