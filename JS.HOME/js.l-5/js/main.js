'use strict'

const userName = {
    name: "",
}

userName.name = prompt("Enter your name:")

if (userName.name === "" ) {
    console.log("Name is not written");
    alert("Name is not written")
    document.write(`
        <h1>Name is not writte</h1>
    `)
} else {
    console.log( "Name is written" );
    document.write (`
    <h1>Your favorite car?</h1>
    `)
} 
alert(userName.name + " Welcome! 🎉")

const fullNameOne  = { ...userName };
console.log( fullNameOne );

const person = {
    reader: "Shaxmardan",
    age: 24,
    isMarried : false,
}
console.log(person);

const cars = [
    "Mercedes-Benz",
    "Bentley",
    "Bmw",
    "Audi",
    "Tesla",
]
// for (let i = 0; i<cars.length; i++ ) {
//     //  console.log(cars[i]);
// }
const carsOne = {...cars};
console.log(carsOne); 




const carsTwo = [
    "Tesla",
    "Bmw",
    "Audi",
    "Mercedes-Benz",
    "Bentley",
]
for (let n in carsTwo) {
    console.log("This is form for/in " +n);
}

const carsThree = [
    "Bentley",
    "Mercedes-Benz",
    "Bmw",
    "Audi",
    "Tesla",
]
for (let n of carsThree) {
    console.log("This is form for/of " +n);
}

let k=0;
do {k++;
    console.log("hello", k)
    
} while (k < 5)


    
const today = new Date();
console.log(today);

