//shallow copy 
// const person = {
//     name: "shaka",
//     age: 25,
//     isMarried : false,

// }

// const person2  = person

// console.log(person)
// person2.name = 'Shaxmardan'
// console.log(person2);


//deep copy

const car = {
    name: "matiz",
    year: 2020,
    isAirbag: false,
}


const car2 = { ...car } //spread
car2.name = "Spark"

console.log(car2);

const car3 = Object.assign({}, car )  //assign
car3.name = "nexia"
car3.isAirbag = true

// console.log(car.name)
// console.log(car2.name)
console.log(car3)
