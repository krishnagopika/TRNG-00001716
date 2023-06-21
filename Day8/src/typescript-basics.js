"use strict";
// interface User {
//     email:string;
//     password:string;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let IceCream = class IceCream {
    constructor() {
        this.flavor = 'vanila';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
};
__decorate([
    Emoji()
], IceCream.prototype, "flavor", void 0);
__decorate([
    Confirmable('Are you sure?'),
    Confirmable('Are you super, super sure? There is no going back!')
], IceCream.prototype, "addTopping", null);
IceCream = __decorate([
    Frozen
], IceCream);
function Confirmable(message) {
    return function (target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const allow = confirm(message);
            if (allow) {
                const result = original.apply(this, args);
                return result;
            }
            else {
                return null;
            }
        };
        return descriptor;
    };
}
function Emoji() {
    return function (target, key) {
        let val = target[key];
        const getter = () => {
            return val;
        };
        const setter = (next) => {
            console.log('updating flavor...');
            val = `🍦 ${next} 🍦`;
        };
    };
}
function Frozen(constructor) {
    Object.freeze(constructor);
}
