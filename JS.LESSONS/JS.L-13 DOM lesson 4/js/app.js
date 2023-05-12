// dom events

// click, change, 

const myButton = document.getElementById('button')
const myDecrement = document.getElementById('decrement')
const countElement = document.getElementById('count')

const input = document.getElementById('myInput')

let count = 0;

function incremenet() {
    count++
    setCountToHtml()
    changeInputValue()
}

function  decremenet() {
    count--
    setCountToHtml()
    changeInputValue()
}

function setCountToHtml() {
    countElement.innerHTML = count
}
function changeCountFormInputValue() {
    count = input.value
    countElement.innerHTML = input.value
}

function changeInputValue() {
    input.value = count 
}
changeInputValue()

myButton.addEventListener('click', incremenet)
myDecrement.addEventListener('click', decremenet)
input.addEventListener('click', cancelAnimationFrame)
