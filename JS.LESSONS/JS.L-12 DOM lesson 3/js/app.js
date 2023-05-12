'use strict'

const accordionBtns = document.getElementsByClassName('accordion-btn')
const accordionContents = document.getElementsByClassName('accordion-content')

for (let i = 0; i < accordionBtns.length; i++) {
    accordionBtns[i].addEventListener('click', () => {
        cleaarActiveClasses()
        accordionBtns[i].classList.toggle('active')
    })
}

function cleaarActiveClasses() {

    for (let i = 0; i < accordionContents.length; i++) {
        accordionBtns[i].classList.remove('active')
    }
    
}