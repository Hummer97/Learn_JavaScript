let a = 20 // Global Scope
const b = 30
var c = 230

if (true) { //this curly braceses are basically called scope 
    let a = 201 // this is called Local scope
    const b = 301
    var c = 2370
    console.log(a);//201
    console.log(b);//301
    console.log(c);//2370
}

console.log(a);//20
console.log(b);//30
console.log(c); //2370 //beacuse var is not follow the scope rules