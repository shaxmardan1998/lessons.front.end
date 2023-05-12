'use strict'

const myInput = document.querySelector("#name")
const mySubmit = document.querySelector("#submit")
const myMenu = document.querySelector("#menu")
const button = document.querySelector("#otvet")


function input() {
    if(myInput.value !== "") {
        const li = document.createElement("h1")
        li.innerHTML = myInput.value
        myMenu.appendChild(li)
        myInput.value = ""
    }else {
		alert('All field is required!')
	}
}
mySubmit.addEventListener('click', input)

button.addEventListener('click', e =>  {
    // console.log("Shaka");
} )