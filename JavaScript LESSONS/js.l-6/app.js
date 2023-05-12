'use strict'

// ***************** FUNTION 

// funiktion decloration 

function sayHello(name) {
    console.log("Welcome");
    console.log("Hello " + name);
}
sayHello("Shaka")




// function expression   

const calc = function (a, b) {
    console.log( a + b );
}
calc (10, 20)


function getName() {
    return "Shaxmardan" 
}
console.log(getName());






//  arr => Array

const numbers = [0, 2, -8, 3, 45, -32]

function getOnlyPlusNumbers(num) {
    const newArr = []
    const minusArr = []
    for(let numbers of num ) {
        if(numbers >= 0) {
            newArr.push(numbers)
        } else {
            minusArr.push(numbers)
        }
    }
    return {
        newArr,
        minusArr
    }
}
console.log(getOnlyPlusNumbers(numbers));

//////////////////////////////////////////////////
function getAgeAccess(age) {
    if(age >= 18) {
        console.log("18+");
    } else if (age >= 12) {
        console.log("12+");
    } else {
        console.log("6+");
    }
}
getAgeAccess(20)