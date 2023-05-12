'use strict'

const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const bmwOne = document.getElementById("bmwone")
const bmwTwo = document.getElementById("bmwtwo")
const bmwthree = document.getElementById("bmwthree")


showBtn.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
} )

closeBtn.addEventListener('click', ()=> {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
} )

bmwOne.addEventListener('click', ()=> {
    const bmwone = [
        "GLS 600 maybah 2022", "Jili: 2022-jil", "Ju'rilgeni: 1200km", "Bahasi: 300 000$", "Tel: +99893-565-25-98",]
    for (let i = 0; i < bmwone.length; i++) {
        console.log(bmwone[i]);
    }
})

bmwTwo.addEventListener('click', ()=> {
    const bmwtwo = [ "S-Class w233 S500", "Jili: 2022-jili", "Ju'rilgeni: 2000km", "Bahasi: 120 000$", "Tel: +99893-656-25-98" ]
    for (let i = 0; i < bmwtwo.length; i++) {
        console.log(bmwtwo[i]);
    }
})

bmwthree.addEventListener('click', ()=> {
    const bmwthree = ["G63 AMG 2022 BRABUS", "Jili: 2021-jili", "Ju'rilgeni: 100 000 km", "Bahasi: 90 000$", "Tel: +99893-565-25-98"]
    for(let i = 0; i < bmwthree.length; i++) {
        console.log(bmwthree[i]);
    }
})

const currentUserName = prompt("Enter your name:")
const currentUserAge = +prompt("Enter your age:")

const result = `${currentUserName}, Siz ${2022 - currentUserAge} jili tuwilg'ansiz, ha'm  ${currentUserAge * 12} ay, ${ ((currentUserAge * 365 )/7).toFixed(0) }
hapte, ${currentUserAge * 365} ku'n, ${currentUserAge * 365 * 24} sag'at, ${currentUserAge * 365 * 24 * 60} minut ${currentUserAge * 365 * 24 * 60 * 60} sekund jasag'ansiz.`

console.log(result);

 if (currentUserAge < 5) {
    alert ("Sizin' jasin'iz 5 ten kishi ❌")
    console.log("Sizin' jasin'iz 5 ten kishi ❌");
} else if (currentUserAge > 30) {
    alert("Sizin' jasin'iz 30 dan u'len ❌")
    console.log("Sizin' jasin'iz 30dan u'ken ❌");
} else {
    alert( currentUserName + " Xosh Keldin'iz ✔")
    
    for (let i = 0; i < currentUserAge; i++) {

        console.log(currentUserName.toLocaleUpperCase());
    }
    for (let k = 0; k < 2 * currentUserAge; k++) {
        console.log(currentUserName.toLocaleLowerCase());
    }

    console.log("Your age: " + currentUserAge);
}
