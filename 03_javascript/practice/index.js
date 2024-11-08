let mint=document.querySelector('span')
mint.innerText="맛없다 ㅡㅡ;;"
mint.style.fontWeight="700"
mint.style.color="red"

// const todo=document.querySelectorAll('li[class="todo"]')
// const done=document.querySelectorAll('.done') // 순서가 중요하다
// for(let too of todo){
//     too.classList.add('done');
//     too.classList.remove('todo')
// }

// for(let doo of done){
//     doo.classList.add('todo');
//     doo.classList.remove('done')
// }

const lis = document.querySelector('li')
for(let li of lis){
    li.toggle('todo')
    li.toggle('done')
}