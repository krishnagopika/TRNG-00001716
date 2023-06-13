function getCategories(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const categories = ['general', 'technology', 'business'];
            if(categories.length>0){
                resolve(categories);
            }
            else{
                reject("No categories found");
            }
        }, 2000)
    })
}

function getArticles(selectedCategory){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const articles = [
                {category:'general', articleNames:['Ukraine war', 'Recession', 'Unemployment', 'Demonotization of 2000 rupeee notes in India']},
                {category:'technlogy', articleNames:['Star Ship launch by SpaceX', 'Google Launched New AI']}
            ];
            const articlesForGivenCategory = [];
            for(let i=0;i<articles.length;i++){
                if(articles[i].category==selectedCategory){
                    articlesForGivenCategory.push(articles[i].articleNames);
                }
            }
            if(articlesForGivenCategory.length>0){
                resolve(articlesForGivenCategory);
            }
            else{
                reject("No Atrticles found for given category")
            }
        })
    })
}

// getCategories()
// .then((categories)=>{
//     console.log(categories);
//     return getArticles(categories[1]);
// })
// .then((articles)=>{
//     console.log(articles);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .catch()
// .finally(console.log("Response recieved"));

async function fetchCategoriesAndArticles(){
    try{
        const catergories = await getCategories();
        console.log(catergories);
        const articles = await getArticles(catergories[0]);
        console.log(articles);

    }
    catch(error){
        console.log(error);

    }
}

fetchCategoriesAndArticles();