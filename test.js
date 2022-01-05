//how to do user input in JS using the browser...

let person = prompt("Please enter your name")
console.log(person)

// let arr = []
// let test = prompt("Enter text")
// arr.push(test)
// console.log(arr)
// console.log(arr[0])

//how to do user input in JS without requiring the browser...

// let arr = []
// arr.push("1")

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         arr.push(name)
//         hello()
//         rl.close();
//     });
// });

// let hello = function(){
//     console.log(arr[0])
//     console.log(arr[1])
// }