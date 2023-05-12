const button = document.querySelector('#btn-id');
const myInput = document.querySelector('#text-input');
const myInput2 = document.querySelector('#text-input-one');
const myInput3 = document.querySelector('#text-input-two');
const menu = document.querySelector(".menu")
const list = document.querySelector(".menu-li")


const content = document.querySelector('#content');

const users = [
    {name: "Jon", text:'Hello world!', number: "+998935652598",},
    {name: "David", text:'Hello world!', number: "+998935652598",},
    {name: "Jek", text:'Hello world!', number: "+998935652598",},

];

function myFunction() {

    if(myInput.value !==  "") {
        let save = {
            name: myInput.value, 
            text: myInput2.value, 
            number: myInput3.value, 
        }
        users.push(save)
        renderUsersName()
    } else {
        alert("error")
    }
}

function renderUsersName() {
    menu.innerHTML = ""
    users.map((user) => {
        menu.innerHTML += `<li> 
        ${"Name: " + user.name}
        ${"Text: " + user.text}
        ${"Number: " + user.number}
        </li>`
    })
}