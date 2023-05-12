
// const age = +prompt("Enter your age:")

// switch (age) {
//     case 10: 
//         console.log("10 jastasiz");
//     break;
//     case 20: 
//         console.log("20 jastasiz");
//     break;
//     case 30:
//         console.log("30 jastasiz");
//     break;
//     default:
//         console.log("Onday jas joq");
// }

// if(age === 10) {
//     console.log("10 jastasiz");
// } else if (age === 20) {
//     console.log("20 jastasiz");
// } else if (age === 30) {
//     console.log("30 jastasiz");
// } else {
//     console.log("Aldama");
// }


// //////////***********     TAZA ARRAY JARATIW  ARRAYLARDI QOSIW
// const cars = [ "BMW", "MERS", "TOYOTA", ]
// // console.log(cars);

// const newArray = new Array("Matiz", "Spark", "Nexia")    /// TAZA ARRAY JARATIW
// // newArray[0] = "Gentra" // ARRAYDIN ISHINDEGI MAG'LUMATLADI O'ZGERTIW
// // console.log(newArray);

// // const fullArray = cars.concat(newArray)
// // console.log(fullArray);

// const fullArray = [ ...cars, ...newArray ];
// console.log(fullArray);
 


// const cars = [ "BMW", "MERS", "TOYOTA", ]
// // cars.push("AUDI")  // PUSH => izine qosadi eken
// // cars.pop()  // POP => izinen birewein aladi eken

// // cars.unshift("AUDI") // UNSHIFT => aldina birewin qosadi eken
// // cars.shift()   // aldinan birewin aladi eken

// console.log(cars);


// let newCars = [ 'MATIZ', "MALIBU", "GENTRA", "COBALT"];
// newCars = [ ...newCars, "NEXIA3" ];
// console.log(newCars);

// const cars = [ 'MATIZ', "MALIBU", "GENTRA", "COBALT"];

// for( let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// for (let i in newCars) {   // in bolatin olsa bolsa indeex alip keledi 
//     console.log(i, "=== index (sanalardi) alip keledi");
// }

// for (let i of newCars) {  // of bolsa ishindegi itemdi alip keledi
//     console.log(i, "=== itemdi (ishindegi maglumatlardi alip keledi) alip keledi");
// }

// let number = 1;

// console.log(number++);
// console.log(number);
// console.log(++number);

// console.log(number--);
// console.log(number);
// console.log(--number);

const users = [
    {id: 1, name: "Iqlas", year: "2004"},
    {id: 2, name: "Rasul", year: "2004"},
    {id: 3, name: "Sardar", year: "2004"},
    {id: 4, name: "Shaka", year: "1998"},
    {id: 5, name: "Jonh", year: "1992"},
]

for(let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}
