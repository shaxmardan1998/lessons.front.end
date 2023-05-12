const menu = document.querySelector('#menu')
const iconBtn = document.querySelector('#icon-btn') 

const menuLi = document.getElementsByClassName('menu-li')
const menuP = document.getElementsByClassName('menu-p')



iconBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

for(let i = 0; i < menuLi.length; i++) {
    menuLi.addEventListener('click', () => {
        active ()
        menuLi.classList.toggle('active')
    })
}

function active () {
    for(let i = 0; i < menuP.length; i++) {
        menuP[i].classList.remove('active')
    }
}