// function delayedEvent(){
//     console.log("this is event is delayed");
// }

// function recurringEvent(){
//     console.log("this event is repeated for a certain time interval")
// }

// console.log("The function execution started");
// function stopTimeout(timeoutId){
//     clearTimeout(timeoutId);
// }
// const timeout = setTimeout(delayedEvent,2000);
// setTimeout(()=>{stopTimeout(timeout)},1000);

// function firstFunction(){
//     console.log("callback function")
// }

// function secondFunction(callback){
//     callback;
// }

// secondFunction(firstFunction());


// let weather;

// function getWeather(){
//     setTimeout(()=>{
//         weather="Sunny"
//     }, 2000)
// }

// function displayWeather(getWeather){
//     getWeather;
//     console.log(weather);
// }

function promise(){
    return new Promise()
}

