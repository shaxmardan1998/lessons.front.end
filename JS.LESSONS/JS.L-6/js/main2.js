'use strict'

const currentUserName = prompt("Enter your name").toLocaleUpperCase()

const users = [
    {id:1, user_id:1, name: "Jasur", password: "123", adreess: "Nukus"},
    {id:2, user_id:2, name: "Umarbek", password: "123", adreess: "Xojeli"},
    {id:3, user_id:3, name: "Shaka", password: "123", adreess: "Kegeyli"},
]

let currentUser = null
let i = 0

do {
    if (users[i].name.toLocaleUpperCase() === currentUserName) {
        currentUser = users[i]
    } i++
} while (i < users.length)

console.log(currentUser);


switch (currentUserName) {
    case "UMARBEK":
        console.log("HELLO SHAKA");
    break
    case "JASUR":
        console.log("HELLO JASUR");
    break    
    default:
        console.log("HELLO" + currentUserName);
}