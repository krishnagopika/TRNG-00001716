"use strict";
// interface User {
//     email:string;
//     password:string;
// }
// interface verifiedUser{
//     name:string;
// }
// function loginUserWithPassword(user: User){
//     console.log(`welcome ${user.email}`);
// }
// function loginUserWithoutPassword(user:verifiedUser){
//     console.log(`welcome ${user.name}`);
// }
// const SampleUser = {
//     name:"Harry",
//     email:"harrypotter@mom.com",
//     password:"Expecto Petronum"
// }
// loginUserWithPassword(SampleUser);
// loginUserWithoutPassword(SampleUser);
// let luckyNumber = 4;
// luckyNumber = "4";
// const employee = {name:"John", email:"Doe"};
let a;
a = "Iam a string";
if (typeof a == "string") {
    console.log(a.length);
}
let ar = [1, 2, "string"];
function printSomething(something) {
    return `hello ${something}`;
}
function getUser(user) {
}
function getUserI(user) {
}
const i = 1;
let PromiseStateUnion;
PromiseStateUnion = "Pending";
var PromiseState;
(function (PromiseState) {
    PromiseState["PENDING"] = "Pending";
    PromiseState[PromiseState["REJECTED"] = -1] = "REJECTED";
    PromiseState[PromiseState["RESOLVED"] = 1] = "RESOLVED";
})(PromiseState || (PromiseState = {}));
function identity(arg) {
    return arg;
}
let output = identity(1);
let array;
let c = {
    x: 1,
    y: "2"
};
function getCoordinate(Point, property) {
    return Point[property];
}
console.log(getCoordinate(c, "x"));
console.log(getCoordinate(c, "y"));
function getCoordinates(coordinates) {
    return coordinates;
}
let returnedCoordinates = getCoordinates({
    x: 1,
    y: "2"
});
let point1 = {
    x: 1,
    y: "9"
};
//readonly property
//point1.x= 3;
let id;
function processTheValue(id) {
    if (typeof id == 'string') {
        console.log(id.length);
    }
}
class identifier {
}
// instanceof
function processTheObject(id) {
    if (id instanceof identifier) {
        console.log(id.name);
    }
    //console.log(id.name);
}
// custom type predicates
function sendEmial(value) {
    if (checkEmail(value)) {
        return `Email sent to ${value}`;
    }
    return "Email is invalid";
}
function checkEmail(value) {
    if (value.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}
class Student extends identifier {
    constructor(id) {
        super();
        this.id = id;
    }
    returnID(id) {
        return id;
    }
}
const pointn = {
    x: 7,
    y: "56"
};
// pointn.x=6;
//type assertions
// let input = document.getElementById("name") as HTMLInputElement;
// let input = <HTMLInputElement> document.getElementById('name');
