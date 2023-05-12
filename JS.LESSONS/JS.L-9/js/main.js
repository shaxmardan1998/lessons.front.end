'use strict'

const myInput = document.querySelector("#name")
const myButton = document.querySelector("#submit")
const myContent = document.querySelector("#text-content")


//1-misal
// const button = document.getElementById("myButton")
// const myInput = document.getElementById("myInput")

// const button2 = document.getElementsByClassName("text")
// const input2 = document.querySelector("#myButton")

// button.addEventListener("click", function () {
//     console.log("Hello world");
// })

// myInput.addEventListener ("change", e => {
//     //e === event  
//     console.log(e.target.value);
// })

// myInput.onchange = function (e) {
//     console.log(e);
// }


// 2-misal
function onSubmit () {
    if (myInput.value !== '') {
        myContent.innerHTML = `<p class="text">${myInput.value}</p>`
        myInput.value = ""
    } else {
        alert("All field is required!")
    }
}

// 2-misal
// function onSubmit () {
//     if (myInput.value !== '') {
//         const p = document.createElement("h1")
//         p.className = "text"
//         p.innerHTML = myInput.value
//         myContent.appendChild(p)
//     } else {
//         alert("All field is required!")
//     }
// }










