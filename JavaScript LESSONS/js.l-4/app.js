// ************************************** switch case 

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

//  **********************************   for loop ( in ha'm of ) 

// for(let i = 0; i < 5; i++) {
//     console.log(1 + i);
// };

// const users = [ "John", "Ben", "Mark", "David" ]
// for(let i = 0; i < users.length; i++) {
//     // console.log(users[i]);
//     if(users[i] === "Ben") {
//         continue  // Jazilgan "Ben" degen atti alip taslaydi
//     }
//     console.log(users[i]);
// }


// const numbers = [0, 22, 23, -13, 24, -30, -43, -54, 46, 41]
// const newNum = []
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] >= 0) {
//         newNum.push(numbers[i]);
//     }
// }
// console.log(newNum);


// const users = [ "John", "Ben", "Mark", "David" ]
// for (let user of users) {
//     console.log(user + " OF tan kelip atir");
// }
// for (let user in users) {
//     console.log(user + " IN tan kelip atir");
// }


const users = [ "JOHN", "BEN", "mark", "david" ];
const newUsers = []
for (let i = 0; i < users.length; i++) {
    if(users[i].toUpperCase() === users[i]) {
        newUsers.push(users[i])
        console.log(users[i]);
    } else {
        if(users[i].toLocaleLowerCase() === users[i]) {
            console.log(users[i]);
        }
    }
}
console.log(newUsers);

