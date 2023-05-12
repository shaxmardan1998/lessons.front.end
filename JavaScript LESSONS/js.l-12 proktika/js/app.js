const changeBtn = document.querySelector(".changer-mode");
const sun = document.querySelector(".sun")
const moon = document.querySelector(".moon")


changeBtn.addEventListener("click", () => {
    sun.classList.toggle("sun-bxs")
    document.querySelector("body").classList.toggle("dark");
    moon.classList.toggle("moon-bxs")
})

