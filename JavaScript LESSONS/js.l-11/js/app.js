'use strict'
const menuBtn = document.querySelector("#menu-btn")
const menuBtnIcon = document.querySelector("#menu-btn i")
const menu =document.querySelector("#menu")
const header = document.querySelector("header")

const toUpBtn = document.querySelector('#to-top')
toUpBtn.stlye.right = '-200px'

menuBtn.addEventListener('click', () => {
    menu.classList.toggle("active")
    menuBtnIcon.classList.toggle('bx-x')
})

window.addEventListener('scroll', e => {

    if(window.scrollY > 500) {
        toUpBtn.stlye.right = '100px'
    } else {
        toUpBtn.stlye.right = '-200px'
    }

    if(window.scrollY > 100) {
        header.classList.add('bg-red-500')
        header.classList.add('shadow-md')
    } else {
        header.classList.remove('bg-red-500')
        header.classList.remove('shadow-md')
    }
})