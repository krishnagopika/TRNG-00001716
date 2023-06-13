// function getSources(){
//     fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=22be848e3a974756a2639b3d2b8531a0')
//     .then(resolve=>{
//         if(!resolve.ok){
//             throw new Error("unable to retreive the sources")
//         }
//         return resolve.json();
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(error=>{
//         console.log(error);
//     })
//     .finally(console.log("GET request to NewsAPI"))
// }

async function getSources(){
    try{
    const sources = await fetch('https://newsapi.org/v2/top-headlines/sources?apiKey=22be848e3a974756a2639b3d2b8531a0');
    const data = await sources.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }

}
getSources();

fetch('url',{
    method: 'OPTIONS',
    
})