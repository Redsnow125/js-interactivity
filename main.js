const circle = document.querySelector('#circle')
const btns = document.querySelectorAll('.color-change')
// const buttons = document.querySelector('#button-container')



const changeColor = (evt) =>{
    console.log (evt.target.id)

    circle.style.backgroundColor = evt.target.id;

} 

for(let i = 0; i < btns.length; i++){
    console.log(btns[i])
    btns[i].addEventListener('click', changeColor)
}
// button.addEventListener('click', changColor)


const form = document.querySelector('form')
const list = document.querySelector('ul')
const input = document.querySelector('input')

const submitHandler = evt =>{
    evt.preventDefault();
    console.log(input.value);
    let listItem = document.createElement('li')
    listItem.textContent = input.value

    list.appendChild(listItem)
    // title.textContent = input.value;
    input.value = '';
}


form.addEventListener('submit', submitHandler)