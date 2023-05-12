"use strict";

//  *********************** for while 

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++
// }

//  ************************* for do 

// let n = 0;
// do {
//     console.log("HELLO " + n);
//     n++
// } while (n < 5)

const todos = [
    {id:1, title: "FALSE", completed: false},
    {id:2, title: "TRUE", completed: true},
    {id:3, title: "FALSE", completed: false},
    {id:4, title: "TRUE", completed: true},
]

let i = 0;
while (i < todos.length) {
    document.write(`
        <li class="item ${todos[i].completed ? "active" : ""}">
            ${todos[i].title}
        </li>
    `)
    i++
}


