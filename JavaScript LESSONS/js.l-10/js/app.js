"use strict"

const togglerBtn = document.querySelector("#toggler");
const text = document.querySelector("#text")

togglerBtn.addEventListener("click", e => {
    text.classList.toggle("active")
})


const toggleImgs = document.querySelectorAll(".toggle-img")
const mainImg = document.querySelector("#main-img")

toggleImgs.forEach(item => {
    item.addEventListener("click", e => {
        mainImg.setAttribute("src", item.dataset.car)
    })
})