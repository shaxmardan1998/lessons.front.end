'use strict'

const button = document.querySelector('#submit-btn')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

const users = [
    {login: "jasur@gmail.com", password: 123},
    {login: "jon@gmail.com", password: 123},
    {login: "shaxmardan79@gmail.com", password: 123},
    {login: "jimmy@gmail.com", password: 123}
]

button.addEventListener('click', () => { 

    // if (email.value === "") {
    //     alert("EMAIL JAZILMADI ❌")
    // }

    if ( email.value == users.login ) {
        alert("EMAIL JAZILDI ✔ " );
    } else {
        alert('EMAIL QATE JAZILDI ❌')
    }

    if ( pass.value == 123 ) {
        alert("PASSWORD JAZILDI ✔" )
    } else {
        alert("PASSWORD QATE JAZILDI ❌")
    }    
})

// for (let i = 0; i < users.length; i++) {

// }
