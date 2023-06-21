// // function getSources(){
// //     fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=22be848e3a974756a2639b3d2b8531a0')
// //     .then(resolve=>{
// //         if(!resolve.ok){
// //             throw new Error("unable to retreive the sources")
// //         }
// //         return resolve.json();
// //     })
// //     .then(data=>{
// //         console.log(data);
// //     })
// //     .catch(error=>{
// //         console.log(error);
// //     })
// //     .finally(console.log("GET request to NewsAPI"))
// // }

// const { error } = require("console");

// async function getSources(category){
//     apikey = '74d781a497e65c0d58ce44340ff81bfe';
//     console.log(category);
//     try{
//     const sources = await fetch(` https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apikey}`)
//     const data = await sources.json();
//     console.log(data);
//     document.getElementsByTagName('body')[0].innerHTML = data;

//     }
//     catch(error){
//         console.log(error);
//         document.getElementsByTagName('body')[0].innerHTML = error;

//     }

// }

async function login(){
    try {
        const data = await fetch(`http:localhost:8081/users`);
        const users = await data.json();
        const user = users.find(user)
    }
    catch(error){
        console.log(error);
    }
}
login();
// let data =  getSources();

apikey = '74d781a497e65c0d58ce44340ff81bfe';
url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;


// async function getData(){

//     response = await 

// }
// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     articles = data.articles;

//     for (i = 0; i < articles.length; i++) {
//       // articles[i].title
//       console.log("Title: " + articles[i]['title']);
//       // articles[i].description
//       console.log("Description: " + articles[i]['description']);
//       // You can replace {property} below with any of the article properties returned by the API.
//       // articles[i].{property}
//       // console.log(articles[i]['{property}']);

//       // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
//       break;
//     }
//   });