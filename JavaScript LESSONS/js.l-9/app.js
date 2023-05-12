"use strict"

const button = document.getElementById("btn")
const textInput = document.querySelector("#text")
const descriptionInput = document.querySelector("#decription")
const items = document.querySelectorAll("li")
const hitxt = document.querySelector("#hitxt")
const box = document.querySelector("#box")
const btnSubmit = document.querySelector("#btn-click")

const userInput = document.querySelector("#username");
const addUserBtn = document.querySelector("#add-user");
const userList = document.querySelector("#users")

button.addEventListener("click", () => {
    console.log(textInput.value);
    console.log(descriptionInput.value);
})

items.forEach((li) => {
    li.addEventListener("click", (e) => {
        alert(li.innerHTML)
    })
})

hitxt.innerHTML = `<h1>HELLO</h1>`

btnSubmit.addEventListener("click", e => {
    box.classList.toggle("active")
})

function addNewUser(username) {
    userList.innerHTML += `<li>${username}<li/>`
    userInput.value = ""
}

addUserBtn.addEventListener("click", () => {
    if(userInput.value) {
        addNewUser(userInput.value)
    }
})

























// function clickButton() {
//     button.innerHTML = "Changed text"
//     alert("Hello DOM")
// }





