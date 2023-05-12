'use strict '

//map, forEach, filter, find, findIndex

// const users = [ 
//     {id:1, name: "Shaka", address: "Kegeyli"},
//     {id:2, name: "Jasur", address: "Shimbay"},
//     {id:3, name: "Jaqsibay", address: "Nokis"},
//     {id:4, name: "Jon", address: "Xojeli"},

//  ]

// users.forEach(function (item, index) {
//     console.log(item); //===user[i]
//     console.log(index); // === i
// })

// users.map(item => {
//     console.log(item);
// })

// const newUsers = users.filter(item => item.name !== "Shaka") // aray
// console.log(newUsers);

// const currentUser = users.find(item => item.name === "Shaka") // ==> object
// console.log(currentUser);

// const currentUserIndex = users.findIndex(item => item.name === "Gozzal") 
// console.log(currentUserIndex);

// if(currentUserIndex === -1)
// console.log("User not defined");


const users = [ 
    {id:1, name: "Shaka", address: "Kegeyli"},
    {id:2, name: "Jasur", address: "Shimbay"},
    {id:3, name: "Jaqsibay", address: "Nokis"},
    {id:4, name: "Jon", address: "Xojeli"},

 ]
 
 function getTotal(array) {
    const usersPrices = []
    array.map(item => usersPrices.push(+item.price))

    let totalUsersPrices = usersPrices.reduce((prev, curr) => {
        return prev + curr
    },0)

    return {
        couunt
    }
 }