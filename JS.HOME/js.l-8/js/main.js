'use strict'

// const atlar = [ "nawriz", "raxman", "aziz" ]

// const newAtlar = []

// atlar.forEach(function (ism) {
//     const newIsm = ism.charAt().toLocaleUpperCase() + ism.slice(1).toLocaleLowerCase() + "bek"
//     newAtlar.push(newIsm)
// })

// console.log(newAtlar);

// const users = [
//     {id:1, name: "Jasur", price: 100,},
//     {id:1, name: "Axmet", price: 200,},
//     {id:1, name: "Mark", price: 300,},
//     {id:1, name: "David", price: 400,},
// ]

    const numbers = [ 50, 20, 50, 80, 101, -7, -9, -30, -21, -50, ]

    //barlig'in console g'a shig'ar 
    console.log(numbers);

    //minustan u'lken bolg'an sanlardain' qosindisin shig'ar
    function total(number) {
        const numbersTotal = []
        number.map(item => item > 0 ? numbersTotal.push(item):null)

        let totalNumber = numbersTotal.reduce( (prev , curr) => {
            return  prev + curr
        }, 0)
        return {
            Count: number.length,
            Total: totalNumber,
        }    
    }
    console.log(total(numbers));
    