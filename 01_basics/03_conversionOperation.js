"use strict";

let score = "Avinash"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//All responses according to the value:
//score = 33
// number
// number
// number
//valueInNumber = 33

//score = "33"
// string
// string
// number
//valueInNumber = 33

//score = "33qwe"
// string
// string
// number
//valueInNumber = NaN (Not a Number)

//score = "Avinash"
// string
// string
// number
//valueInNumber = NaN (Not a Number)

//score = null
// object
// object 
// number
//valueInNumber = 0

//score = undefined 
// undefined
// undefined 
// number
//valueInNumber = NaN (Not a Number)

//score = true 
// boolean
// boolean 
// number
//valueInNumber = 1

//score = false 
// boolean
// boolean 
// number
//valueInNumber = 0

let isLoggedIn = undefined
console.log(isLoggedIn)
let convertInBoolean = Boolean(isLoggedIn)
console.log(convertInBoolean)

// 1 => true; 0=> false
// "" => false
// "Avinash" =>true
// null =>false
// undefined  =>false

let someValue = undefined
let convertInString = String(someValue)
console.log(convertInString);
console.log(typeof convertInString);