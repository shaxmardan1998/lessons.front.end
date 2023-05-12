//let, const

const spark = {
    color: "red",
    name: "chevrolet spark",
    wheelCount : 4,
}
    console.log(spark)

const person = {
    fname : "Jhon",
    age : 32,
    isMarried : true,
    eyeColor : "blue",
    childrenCount: 3,
    childrenName: {
        firts: "robert",
        second: "robert2",
        last: "robert3",
    }

}
    console.log(person)


let userName = "Shaxmardan Seytekov"

console.log(userName.toUpperCase())
console.log(userName.toLowerCase())
console.log(userName.length)
console.log(userName.split(''))
console.log(userName.includes("john"))
console.log(userName.slice(11, userName.length))


const age = 250000000

console.log(age.toString())
console.log(age.toLocaleString())

const today = new Date()
console.log(today.getTime())
console.log(today.getTimezoneOffset())
console.log(today.getTime())

