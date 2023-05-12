'use strict'

// let text = "welcome"

// const word = "My name is Shaka"
// const words = " john, my, mark, Rasul "

// // console.log(words);

// const wordsInArr = [ "hello", "my", "name", "is", "Shaka" ]

// console.log(text.length);
// console.log(text.charAt());
// console.log(text.slice(0, 4));
// console.log(word.split(' '));
// console.log(words.split(" "));

// console.log(wordsInArr.join(' '));

// const w = '123'

// function reverseFunt() {
//     return text.split('').reverse().join('')
// }

// console.log(reverseFunt(''));


const person = {
    name: "John",
    age: 18,
    isMarrried: false,
    addition: {
        hobbies: [ 'sport', 'game', 'reading' ]
    },
}
let myname = 'Shaka'
let newName = myname

newName = "Jasur"

console.log(myname); 
console.log(newName);


//shallow copy
const secondPerson = person
// console.log(secondPerson);


// deep copy 
const human = { ...person, addition: { ...person.addition } }

human.name = "Barliqbay"

human.addition.hobbies ="UPDATED"

const newPerson = JSON.parse(JSON.stringify(person))

newPerson.addition.hobbies = "UPDATED"

console.log("New person: ", newPerson);
console.log("Old person: ", person);