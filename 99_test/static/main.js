document.addEventListener("DOMContentLoaded", function () {
  const refreshButton = document.querySelector(".refresh-button");
  const contentArea = document.querySelector(".content-area");
  const newWorry = document.querySelector(".new-worry");
  const inputTitle = document.querySelector(".input-title");
  const inputContent = document.querySelector(".input-content");
  const submitButton = document.querySelector(".submit-button");

  refreshButton.addEventListener("click", function () {
    // 기존 입력 필드 숨기기
    inputTitle.style.display = "none";
    inputContent.style.display = "none";
    submitButton.style.display = "none";

    // 새 고민 섹션 표시
    newWorry.style.display = "block";

    // 서버에서 새로운 고민을 가져오는 로직
    // 실제 구현 시에는 서버로부터 데이터를 받아와야 합니다
    const mockData = {
      title: "새로운 고민 제목",
      content: "새로운 고민의 내용입니다.",
    };

    const worryTitle = document.querySelector(".worry-title");
    const worryContent = document.querySelector(".worry-content");

    worryTitle.textContent = mockData.title;
    worryContent.textContent = mockData.content;

    // placeholder 속성 제거
    worryTitle.removeAttribute("placeholder");
    worryContent.removeAttribute("placeholder");
  });
});

const modal = document.querySelector(".modal");

window.addEventListener("load", () => {
  modal.style.display = "flex";
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("login-screen").style.display = "block";
  document.getElementById("join-screen").style.display = "none";

  document.getElementById("join-btn").addEventListener("click", function () {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("join-screen").style.display = "block";
  });
});

function closeModal(modalToClose) {
  modalToClose.style.display = "none";
}

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", function () {
  closeModal(modal);
});

const closeX = document.querySelector(".modal_body .closeX");
closeX.addEventListener("click", function () {
  closeModal(modal);
});

async function loginFn() {
  const form = document.forms["form-login"];
  const email = form.email.value;
  const password = form.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("이메일, 비밀번호를 모두 입력하셔야 합니다!");
    return;
  }

  const data = { email, password };

  try {
    const res = await axios({
      method: "post",
      url: "/user/login",
      data: data,
    });
    const { token, result } = res.data;
    if (result) {
      localStorage.setItem("token", token);
      alert("로그인 성공!");
      document.querySelector(".modal").style.display = "none";
      document.querySelector(".index-container-wrap").style.display = "block";
    } else {
      alert("로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.");
      form.reset();
    }
  } catch (e) {
    console.error("Error login:", e);
  }
}

async function joinFn() {
  const form = document.forms["form-join"];
  const email = form.email.value;
  const domain = form.selection.value;
  const password = form.password.value;
  const confirmPw = form.confirmPw.value;
  const question = form.combo.value;
  const answer = form.answer.value;

  if (password.trim() === "" || confirmPw.trim() === "") {
    alert("이메일, 비밀번호를 모두 입력하셔야 합니다!");
    return;
  }
  if (!question) {
    alert("질문을 선택 하셔야 합니다!");
    return;
  }
  if (answer.trim() === "") {
    alert("답변을 입력하셔야 합니다!");
    return;
  }
  if (password.trim() !== confirmPw.trim()) {
    alert("비밀번호와 확인 비밀번호가 일치하지 않습니다.");
    form.password.value = "";
    form.confirmPw.value = "";
    form.password.focus();
    return;
  }

  const fullEmail = `${email}@${domain}`;
  const data = { email: fullEmail, password, question, answer };

  try {
    const res = await axios({
      method: "post",
      url: "/regist",
      data: data,
    });
    const { result } = res.data;
    if (result) {
      const formLogin = document.getElementById("login-screen");
      const formJoin = document.getElementById("join-screen");
      formLogin.style.display = "block";
      formJoin.style.display = "none";
    }
  } catch (e) {
    console.error("Error join:", e);
  }
}
