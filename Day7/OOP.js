// 1. Object Literals

// const user = {
//     username:'krishna',
//     password:'krishna123',
//     welcomeUser: function(){
//         console.log(`Welcome ${this.username}`);
//     }
// }

// user.welcomeUser();
// console.log(user.password);

// const numbers = [1,2,3];
// console.log(numbers.pop()+ " "+ numbers)
// console.log(Object.getPrototypeOf(numbers))

// // const Date = new Date();
// console.log(Object.getPrototypeOf(user));
//output:
//Date.prototype
// object {}
//null

// 2. constructor function

// function user(username, password){
    
//     this.username = username;
//     this.password = password;
//     this.welcomeUser = function(){
//         console.log(`Welcome ${this.username}`);
//     }
// }

// const user1 = new user("Krishna", "12345");
// console.log(user1.username)

// 3. Object.create()

// const userPrototype = {
//     welcomeUser: function(){
//         console.log(`Welcome ${this.username}`);
//     }
// }

// const user1 =  Object.create(userPrototype);
// user1.username="Krishna";
// user1.password = "232323";
// user1.welcomeUser();
// console.log(Object.getPrototypeOf(user1))

// ES6 Classes

// class User{
    
//     constructor(username,password){
//         this.username=username;
//         this.password= password;
//     }

//     welcomeUser(){
//         console.log(`Welcome ${this.username}`);
//     }
// }

// const user1 = new User('Krishna',"12345");
// user1.welcomeUser();

// Polymrphism


const Dog = {
    name:'Dog',
    speak:function(){
        console.log("Rolf Rolf");
    }

}

const Cat = {
    name:'Cat',
    speak:function(){
        console.log("Meow");
    }
}

function speak(callback){
    if(typeof callback.speak==='function'){
        callback.speak();
    }
}

// speak(Dog);
speak(Cat);
speak(Dog);


// Errors in JS

// custom error
function errorImplementation(){
    try{
        throw new Error("Custom error");
        }
        catch(error){
            console.log(error);
        }
}

//type error
// const number =2;
// number.toLowerCase();

// range error

'use strict';
let ar = [1,2,2];
ar[4];
new Array(2);




