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
      content: "이것은 새로운 고민의 내용입니다.",
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
