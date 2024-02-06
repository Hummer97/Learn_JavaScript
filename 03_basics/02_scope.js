let a = 20 // Global Scope
const b = 30
var c = 230

if (true) { //this curly braceses are basically called scope 
    let a = 201 // this is called Local scope
    const b = 301
    var c = 2370
    // console.log(a);//201
    // console.log(b);//301
    // console.log(c);//2370
}

// console.log(a);//20
// console.log(b);//30
// console.log(c); //2370 //beacuse var is not follow the scope rules


function one() {
    const userName = "Avinash"

    function two() {
        const website = "youtube"
        console.log(userName);//Avinash
    }
    // console.log(website);//through error due to scope becuse webiste is a local variable
    two()
}

one()


addNumber(20)
function addNumber(number) {
    console.log(number + 1);//21
    return number + 1;

}



// addTwo(30)//Cannot access 'addTwo' before initialization
// // below this type of declearation not allow use to call the function before decleration
// const addTwo = function (number) {
//     return number + 20;
// }
