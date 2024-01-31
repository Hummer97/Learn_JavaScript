// Object De-structuring:

const course = {
    name: "Js Course",
    price: "6785",
    courseInstractor: "Avinash",
}

// normal way to extract code:
console.log(course.courseInstractor); //Avinash

// another way:
const { courseInstractor } = course // this is called Object De-structuring

console.log(courseInstractor); //Avinash

// another way:
const { courseInstractor: teacher } = course

console.log(teacher); //Avinash