const date = document.querySelector('#inputDate');
const content = document.querySelector('#inputContent');
const recordBtn = document.querySelector('#record');
const form = document.querySelector('form');
const recordList = document.querySelector('.recordList');

const checkboxes = document.querySelectorAll('.form-check-input');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // 현재 체크된 체크박스를 제외한 나머지를 비활성화
            checkboxes.forEach(cb => {
                if (cb !== this) {
                    cb.disabled = true;
                }
            });
        } else {
            // 체크가 해제되면 모든 체크박스를 다시 활성화
            checkboxes.forEach(cb => {
                cb.disabled = false;
            });
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
     // 날짜와 내용이 모두 입력되었는지 확인
     if (date.value.trim() === '' || content.value.trim() === '') {
        alert('날짜와 내용을 모두 입력해주세요!');
        return; // 함수 실행 중단
    }
    const checkedIcons = getCheckedIcons();
    const li = document.createElement('li');
    li.innerHTML = `${checkedIcons} ${date.value} : ${content.value} ${checkedIcons}`;
    recordList.append(li);
    date.value = "";
    content.value = "";
    uncheckAllCheckboxes();
});

function getCheckedIcons() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    let icons = '';
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            icons += checkbox.nextElementSibling.textContent.trim() + ' ';
        }
    });
    return icons;
}

function uncheckAllCheckboxes() {
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
        checkbox.disabled = false;
    });
}

