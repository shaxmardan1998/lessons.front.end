// const myFetch = url => new Promise(function (resolve, reject) {
//     if(url) {
//         resolve("jaqsi")
//     } else {
//         reject("jaman")
//     }
// }) 

// myFetch("https://localhous:5000")
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log("Completed!"))


const fruits = ["Apple", "Oreng", "Banana",  "Ananas", "Lemon"]
const letter = "a"


const getCurrentWord = (array, letter) => new Promise(function (resolve, reject) {
    const newArray = array.filter(item => item.toLowerCase().includes(letter.toLowerCase()))
    if(newArray.length) {
        resolve(newArray)
    } else {
        reject("BUNDAY JOQ")
    }
})

getCurrentWord(fruits, "v")
.then(res => console.log(res))
.catch(err => console.log(err))