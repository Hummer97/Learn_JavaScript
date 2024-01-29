const marvel_hero = ["Hulk", "Spiderman", "Ironman", "thor"]
const dc_heros = ["Superman", "flash", "batman"]

marvel_hero.push(dc_heros)
console.log(marvel_hero); //['Hulk','Spiderman','Ironman','thor',['Superman', 'flash', 'batman'],]
const new_Heros = marvel_hero.concat(dc_heros)
console.log(new_Heros); //['Hulk','Spiderman','Ironman','thor','Superman', 'flash', 'batman',]
console.log(marvel_hero[4][1]); //flash

// Concet two arrays using "..."spread operator 
const all_heros = [...marvel_hero,...dc_heros]
console.log(all_heros);//['Hulk','Spiderman','Ironman','thor','Superman', 'flash', 'batman',]

const another_array = [1,2,3,4,[5,6,7,8],9,1,[2,3,5,[1,2,[5,3,4]]]]
const flat_another_array = another_array.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(flat_another_array);//[1, 2, 3, 4, 5, 6, 7,8, 9, 1, 2, 3, 5, 1,2, 5, 3, 4]

console.log(Array.isArray("Avinash"));//false
console.log(Array.from("Avinash"));//['A', 'v', 'i','n', 'a', 's','h']
console.log(Array.from({name:"Avinash"}));//[] we need to pass the instructions that we need to keys as array or value as array without saying its give empty array.

let a = 100
let b = 200
let c = 300
let d = 400

console.log(Array.of(a,b,c,d)); //[ 100, 200, 300, 400 ]