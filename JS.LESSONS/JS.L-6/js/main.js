'use strict'

const currentUserName = prompt("atindi jaz")
const currentUserPass = prompt("Password")

const users = [
    {id:1, user_id:1, name: "Jasur", password: "123", adreess: "Nukus"},
    {id:2, user_id:2, name: "Umarbek", password: "123", adreess: "Xojeli"},
    {id:3, user_id:3, name: "Shaka", password: "123", adreess: "Kegeyli"},
]

const products = [
    {id:1, user_id:1, name: "Iphone 12", count:50},
    {id:2, user_id:2, name: "Samsung", count:30},
    {id:3, user_id:3, name: "redmi", count:20},
]

//validation user

let currentUser =null
for (let i = 0; i< users.length; i++) {
    if (users[i].name === currentUserName && users[i].password === currentUserPass) {
        currentUser = users[i]
    }
}

//get user products
let currentUserProduct = null
if (currentUser) {
    alert("autorizated success ✔")
    
    for (let i = 0; i < products.length; i++) {
        if (products[i].user_id === currentUser.id) {
            currentUserProduct  = products[i]
        }
    }
} else {
    alert ("Login or password incorrect ❌")
}

console.log("Current user profile" , currentUser);
console.log("Current user products" , currentUserProduct);
