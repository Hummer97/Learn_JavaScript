//Immediately invoked Function Expression (IIFE)

//Syntex:
//  (Defination)(execution)


// Why we needed:
// Besically, IIFE is used to restricte the global scope decleration polution. and also used to run function immediately.

//Named IIFE
(function chai() {
    console.log('Running this function immediately');
})();//Running this function immediately
//note: you need to end the code using semicolen to execute the forther code

//Unnamed IIFE or IIFE
((name) => {
    console.log(`Hi, ${name}`);
})('Avinash');//Hi, Avinash

((name) => console.log(`Hi, ${name}`))('Avinash');//Hi, Avinash