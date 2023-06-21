// single line comments

/*

Primitive Data Types

- primitive data types are single valued

- string
-number
- boolean
- null
- undefined
- BigInt (introdueced with ES6)
- Symbol (introduced with ES6)

Reference data types (Objects)
- object
- arrays
- functions
*/


// Declare a variable in JS

// (let, var, const) var-name = value (let and cost ES6-block scope)
//global, function and block scopes

//  i = 5;
//  console.log(i);

// var a=function(a){
//     return a*2;
//     }
//     console.log(a(100));

// function sum (...theArgs) {

//     let total=0;
//     for(const arg of theArgs){
//        total+=arg;
//     }
//     return total;
// }

// console.log(sum(1,2,2));


// var firstName = "Krishna";

// function printName(){

//     let lastName = "Urlaganti";

//     printMessage(){
//         console.log("Welcome" + lastName);
//     }

// }

// console.log(firstName);
//  "use strict";

// console.log(015+019+110);

// let a;

// a= 4;
// answer = "someting";
// const power = (exponent = 2) => {
//     let result = 1;

//     function printNumbers(i=1,j=2){
//            console.log(i,j);

//     }
//     for(let count =0; count<exponent;count++){
//         result*=base;
//     }
//     return result;
// };

// var base =2;

// console.log(power());



// var message = () =>{
//   return "Something"
// };

// console.log(message);


// "use strict";
// const o = {
//     p:1,
//     p:2
// };

// console.log(o.p)
// let a ="Name"
// a.true = "";

// console.log(a.true);


// let a = 4; //a is binding(variable)

// //constructor
// const add = new Function("");

// // Declaration
// function add (a,b){
//     //statements
// }

// // Expresssion (anonymous function but it i sassigned to a binding(variable))

// const add = function(a,b){

// }

// // Expression (function is assigned to bidning)

// const add = function addNumber(a,b){

// }
// // Method
// const methodObject = {
//     add(a,b){
//         return a+b;
//     }
// }

// // Arrow function

// const add = (a,b)=>{return a+b;}


// let johnsDailyLog = [];

// johnsDailyLog.push({events:["Walk", "Observing a tree", "eating chest nuts", "watching a movie"], squirrel:true});
// johnsDailyLog.push({events:["Walk", "Observing a tree", "watching a movie"], squirrel:false})
// johnsDailyLog.pop();
// johnsDailyLog.push({events:["Walk", "Observing a tree", "eating chest nuts", "watching a movie"], squirrel:true});


// console.log(johnsDailyLog.length);
// console.log(johnsDailyLog[0]);
// console.log(johnsDailyLog[0].events[0].length)

i = 3;

i = "Krishna";

console.log(null==undefined)
console.log('name'||true)
