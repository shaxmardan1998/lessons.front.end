const accordionBtns = document.querySelectorAll(".acc-btn")
const accordionContents =document.querySelectorAll('.acc-content')

accordionBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
        accordionContents.forEach(item => item.classList.add("hidden"))
        accordionContents[index].classList.remove("hidden")
    })
})