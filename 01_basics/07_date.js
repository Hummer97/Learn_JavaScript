// Date
// let myDate = new Date()
// console.log(myDate) //2024-01-28T18:44:31.657Z
// console.log(myDate.toDateString()) //Sun Jan 28 2024
// console.log(myDate.toISOString()) //2024-01-28T18:46:19.205Z
// console.log(myDate.toJSON()) //22024-01-28T18:46:19.205Z
// console.log(myDate.toLocaleDateString()) // 1/28/2024
// console.log(myDate.toLocaleString()) // 1/28/2024, 6:46:19 PM
// console.log(myDate.toLocaleTimeString()) //6:46:19 PM
// console.log(myDate.toString()) //Sun Jan 28 2024 18:46:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString()) //18:46:19 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()) //Sun, 28 Jan 2024 18:46:19 GMT


// // let customdate = new Date(2024,0,23)// 1/23/2024, 12:00:00 AM
// // let customdate = new Date(2024,0,23 ,6,8) // 1/23/2024, 6:08:00 AM
// // let customdate = new Date("2024-01-24") // 1/24/2024, 12:00:00 AM
// // let customdate = new Date("24-01-2024") //Invalid Date
// let customdate = new Date("01-12-2024") // 1/12/2024, 12:00:00 AM
// console.log(customdate.toLocaleString());

// let timeStamp = Date.now();
// console.log(timeStamp); //1706468299703
// console.log(customdate.getTime()); //1705017600000

let newDate = new Date()
console.log(newDate.getDate());//28
console.log(newDate.getDay());//0 here day calculate as mon->0,tue->1
console.log(newDate.getFullYear());//2024
console.log(newDate.getHours());//19
console.log(newDate.getMilliseconds());//371
console.log(newDate.getMinutes());//4
console.log(newDate.getMonth());//0 here months calculate as jan->0,feb->1
console.log(newDate.getSeconds());//43
console.log(newDate.getTime());//1706468683371
console.log(newDate.getTimezoneOffset());//0
console.log(newDate.getUTCDate());//28
console.log(newDate.getUTCDay());//0
console.log(newDate.getUTCFullYear());//2024
console.log(newDate.getUTCHours());//19
console.log(newDate.getUTCMilliseconds());//371
console.log(newDate.getUTCMinutes());//4
console.log(newDate.getUTCMonth());//0
console.log(newDate.getUTCSeconds());//43


//Customised date
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));//Sunday