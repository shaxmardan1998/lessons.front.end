    'use strict'

     const userName = {
        name : "",
        age : null,
        hobbie : null,
        isMarried : null,
     }
     userName.name = prompt("Write your name please: ✏ ✏ ✏");
     userName.age = +prompt("Write your age please: ✏ ✏ ✏");
     userName.hobbie = prompt("write your hobbie please: ✏ ✏ ✏");
     userName.isMarried = confirm("Are you married?");
     userName.data = confirm("Сохранять ли данные?");
     alert("🎂🎂🎂 ДОБРО ПОЖАЛОВАТЬ НА САЙТ 🎂🎂🎂");
     
     if(userName.name === "") {
         console.log("Write your name  🖊  ❌ 🤦‍♂️");
        } else{
            console.log("You wrote your name ✔ 😀");
        }
        
    if(userName.age == "") {
        console.log("Write your age  🖊  ❌ 🤦‍♂️");
       } else{
           console.log("You wrote your age ✔ 😀");
       }
    
       if(userName.hobbie === "") {
        console.log("you don't write your hobby?  🖊  ❌ 🤦‍♂️");
       } else{
           console.log("You wrote your hobby ✔ 😀");
       }

    
       
    const userName2 =  { ...userName };
    console.log(userName2);


    const userName3 = [ {...userName} ]
    console.log(userName3);

 
   const today = new Date();
   console.log(today);


