'use strict'

//declaration, expression, arrow


//declaration
function sayHello() {
    console.log("Hello World");
}
sayHello()

//expression
const calFunc = (a, b, type) => {
    switch (type) {
        case 'plus' :
            console.log(a + b);
        break;
        case 'minus' :
            console.log(a - b);
        break;
        case 'multiply' :
            console.log(a * b);
        break;
        case 'divison' :
            console.log(a / b);
        break;
        default:
            console.log("Type is not defined");
    }
}
calFunc(22, 11, 'plus')
calFunc(22, 11, 'minus')


function boyFunc(name) {
    console.log("Hello bro! " + name);
}

function girlFunc(name) {
    console.log("Hello miss! " + name);
}
const gender = confirm("You are girl?")
const fName = prompt("Enter your name:")

if (gender) {
    girlFunc(fName)
} else {
    boyFunc(fName)
}

const getAllMembersCount = (girls, boys) => girls * boys

function getAllMembers(girls, boys) {
    return girls + boys
}

console.log(getAllMembersCount(17, 13));


function sayHello(name) {
    alert("Hello world " + name)
}