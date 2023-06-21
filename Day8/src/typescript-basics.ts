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


let a: unknown;

a = "Iam a string";

if(typeof a == "string"){
    console.log(a.length);

}

let ar = [1,2,"string"];

function printSomething(something:string):string{
    return `hello ${something}`;
}

//type alias
type UserTypeAlias = {
    name:string,
    password:string,
    age:number
}

// extended via intersection

type UserTypeAliasExtended = UserTypeAlias &{
    email:string
}

function getUser(user:UserTypeAlias){

}

interface UserInterface{

    name:string,
    password:string,
    age:number


}

interface UserInterface{
    email:string;
}

function getUserI(user:UserInterface){

}

const i =1;

let PromiseStateUnion : "Pending"|"Resolved"|"Rejected";

PromiseStateUnion = "Pending";


enum PromiseState {
    "PENDING" = "Pending",
    "REJECTED" = -1,
    "RESOLVED" = 1
}

function identity<Type>(arg:Type):Type{
    return arg;
}

let output = identity(1);

let array :Array<number>; 

type Cooordinates = {
     x:number,
    y:string
}

let c = {
    x:1,
    y:"2"
}

type P = keyof Cooordinates;

function getCoordinate(Point : Cooordinates, property: keyof Cooordinates ){
    return Point[property];
}

console.log(getCoordinate(c,"x"));
console.log(getCoordinate(c,"y"));

type A = Awaited<Promise<string>>;


interface CartesianCooordinates{
    readonly x:number,
    y:string
}

function getCoordinates(coordinates:Required<CartesianCooordinates>){

    return coordinates;

}

let returnedCoordinates = getCoordinates({
    x:1,
    y:"2"
});

let point1: Readonly<CartesianCooordinates> = {
    x:1,
    y:"9"
}
//readonly property
//point1.x= 3;



let id : number | string;


function processTheValue(id:number|string){

    if(typeof id == 'string'){
        console.log(id.length);

    }

}

class identifier {
    name:string|number
}
// instanceof
function processTheObject(id:identifier|number){
    if(id instanceof identifier){
        console.log(id.name);

    }
    //console.log(id.name);
}

// custom type predicates

function sendEmial(value:string):string{

    if(checkEmail(value)){
        return `Email sent to ${value}`
    }
    return "Email is invalid";
   
}

function checkEmail(value:string){
    if(value.includes('@')){

        return true;

    }
    else{
        return false;
    }

}


class Student extends identifier {
    id:number

    constructor(id:number){
        super();
        this.id = id;

    }
   

    returnID(id:number){
        return id;
    }




}

const pointn: Readonly<CartesianCooordinates>= {
    x:7,
    y:"56"

}

// pointn.x=6;
//type assertions
// let input = document.getElementById("name") as HTMLInputElement;

// let input = <HTMLInputElement> document.getElementById('name');





