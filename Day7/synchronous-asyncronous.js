// const f1 = function f1(){
//     console.log("f1 is executed");
// }

// const f2 = function f2(f1){
//     setTimeout(()=>{f1}, 6000)
//     console.log("f2 is executed");
// }
// const f3 = function f3(f2){
//     f2;
//     console.log("f3 is executed");
// }

// f3(f2(f1()));

function orderPizza(){
    console.log("Pizza ordered");
}
function eatPizza(){
    console.log("eat pizza");
}

function cookPizza(callback){
    setTimeout(()=>{
        console.log("pizza is cooked");
    }, 4000);
    callback;
    
}

function callAFriend(name){
    console.log("Call "+name)

}

orderPizza();
cookPizza(eatPizza());
callAFriend("Evelyn");

