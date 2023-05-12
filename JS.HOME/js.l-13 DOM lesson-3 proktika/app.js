const btn = document.querySelector('.btn')
const menu = document.querySelector('.menu')

const menuLi =document.getElementsByClassName('menu-li')
const menuPar = document.getElementsByClassName('menu-p')

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

for(let i = 0; i < menuLi.length; i ++) {
    menuLi[i].addEventListener('click', () => {
        myFunction()
        menuPar[i].classList.toggle('active')
    })
}

function myFunction() {
    for(let i =0; i < menuPar.length; i++) {
        menuPar[i].classList.remove('active')
    }
}