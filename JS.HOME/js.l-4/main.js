'use strict'

// function showTime (){
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s  = date.getSeconds();

//     if(h == 0) {
//         h = 12;
//     }

//     if (h > 12){
//         h = h - 0;
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + ":" + m + ":" + s + " " ;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;

//     setTimeout(showTime, 1000)

// }

// showTime();





// const roles = prompt("Enter your name:")

// switch (roles) {

//     case "shaka":
//         document.write(`TEXNOTOS IT ACADEMY OQIWSHISI SHAKA`);
//     break;

//     case "shax":
//         document.write(`TEXNOTOS IT ACADEMY OQIWSHISI SHAX`);
//     break;

//     case "shaxmardan":
//         document.write(`TEXNOTOS IT ACADEMY OQIWSHISI SHAXMARDAN`);
//     break;

//     default:
//         document.write("joq")
// }

    const roles = [ "SHAKA", "SHAX", "SHAXMARDAN" ]
    const userRole = prompt("Enter your name:")

    const product = ["Iphone 14 Pro", "Air pods 3", "Macbook Pro 16"]
    const productOne = [ "Samsung 23 Ultra", "Air pods 3", "Macbook Pro 16"]
    const productTwo = [ "Macbook Pro 16", "Iphone 14 Pro", "Air pods 3",]

    if(roles[0].includes(userRole.toLocaleUpperCase())) {
        console.log("SHAKA");
        document.write(`
            product one: ${product[0]};
            product two: ${product[1]};
            product three: ${product[2]};
        `)
    } else 
    
    if(roles[1].includes(userRole.toLocaleUpperCase())) {
        console.log( "SHAX" );
        document.write(`
            productOne: ${productOne[0]};
            productOne two: ${productOne[1]};
            productOne three: ${productOne[2]};
        `)
    } else 

    if(roles[2].includes(userRole.toLocaleUpperCase())) {
        console.log("SHAXMARDAN");
        document.write(`
            productTwo one: ${productTwo[0]};
            productTwo two: ${productTwo[1]};
            productTwo three: ${productTwo[2]};
        `)
    } else {
        alert("ONDAY ADAM JOQ")
    };



  

