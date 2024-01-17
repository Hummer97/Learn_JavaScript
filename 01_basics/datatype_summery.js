// Types of datatypes:
//1. primitive dataType.
//2. Non primitive dataType (Reference dataType)


//Primitive Data Type :
//String,Numbers,Boolean,null,undefined,symbol,BigInt
const name = "Avinsh" //String
const age = 26 //number
const marks = 98.7 //number
const area = null //null
const isLoggedIn = false //boolean
let address; //undefined

let value1 = Symbol('123')
let value2 = Symbol('123') //both value is different because symbol treated this value as unique. 

//let check the authentication as well :
console.log(value1 == value2); //false
console.log(value1 === value2); //false
console.log(value1); //Symbol(123) 
console.log(value2); //Symbol(123) 

//Non primitive dataType (Reference dataType)
// Array, objects, functions

const heros = ["Shaktiman","Iron Man","Spider Man"]; //array
const objetList = {
    name:"Avinash",
    age:22
} //object

const myFunction = function(){
    console.log("This is my function");
} //function