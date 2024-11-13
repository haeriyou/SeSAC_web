// input value 설정 및 가져오기
// val()
function getValue(){
    let value = $('input').val() // 가져올때는 val()함수에 값만 비워두면 된다
    alert(value)
}
function setValue(){
    $('input').val('다른 글자로 설정!')
}

// css()
function changeCSSJS(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red;'
}
function changeCSSJQ(){
    $('span').css('font-size','40px')
    $('span').css('color','blue')
}

// attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href','https://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href','https://www.daum.net')
}

//text()
function changeTextJS(){
    let p = document.querySelector('.p-text')
    p.innerText='js로 바꾼 내용입니다.'
}
function changeTextJQ(){
    $('.p-text').text('jQ로 바꾼 내용입니다.')
}

//HTML()
function changeHTMLJS(){
    let p = document.querySelector('.p-html')
    p.innerHTML ='<em>javascript</em>'
}
function changeHTMLJQ(){
    $('.p-html').html('<h2>jQuery</h2>')
}

//append()
function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText='마지막 자식으로 추가된 li (js)'

    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li (jquery)</li>')
}

//prepend()
function prependJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText='첫번째 자식으로 추가된 li (js)'

    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>첫번째 자식으로 추가된 li (jquery)</li>')
}

//after()
function afterJS(){
    let green = document.querySelector('.green')
    let newAfter = document.createElement('li')
    newAfter.innerText='after (js)'

    green.after(newAfter)
}
function afterJQ(){
    $('.green').after('<li>after (jquery)</li>')
}

//before()
function beforeJS(){
    let green = document.querySelector('.green')
    let newBefore = document.createElement('li')
    newBefore.innerText='before (js)'

    green.before(newBefore)
}
function beforeJQ(){
    $('.green').before('<li>before (jquery)</li>')
}

// remove()
function removeJS(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removeJQ(){
    $('.li2').remove()
}

// empty()
function emptyJS(){
    let nums = document.querySelector('ul.nums') // 일치 선택자
    nums.innerHTML=''
}
function emptyJQ(){
    $('ul.nums').empty()
}

// 요소 탐색하기
function findParent(){
    console.log($('.child2').parent())
}
function findParents(){
    console.log($('.child2').parents())
}
function findNext(){
    console.log($('.child2').next())
}
function findPrev(){
    console.log($('.child2').prev())
}
function findChildren(){
    console.log($('.parent').children())
}

// 클래스 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}
function removeClass(){
    // $('#hi').removeClass('color-blue')
    // hi id에 달려있는 모든 클래스 제거
    $('#hi').removeClass()
}
function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}
function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}