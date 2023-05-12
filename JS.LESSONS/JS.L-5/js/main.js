'use strict'

// for
// while
// do while


const cars = [
    "bmw",
    "audi",
    "mers",
    "spark",
    "tesla",

]


//for
const car = [ "BMW", "AUDI", "MERS", "FORD" ]

for (let i = 0; i < car.length; i++) {
    console.log(car[i]);
}
const user = {...car}
console.log(user);


// for (let i =0; i<5; i++){
//     console.log("hello", i);
// }


//for/in
for (let n in cars) {
    console.log("this is form for/in " + n);
}


//for/of
for (let n of cars) {
    console.log("this is form for/of " + n);
}

//while 
let i = 0
while (i < cars.length) {
    console.log(i)
    i++
}

//do while
let k = 0;
do {
    console.log("hello", k)
    k++;
} while (k < 5)

// const user = { ...k }
// console.log(user);