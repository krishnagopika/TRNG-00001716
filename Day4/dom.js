// const appleList = document.getElementsByClassName('apples')[0];
// const apples = appleList.firstChild;
// console.log(apples);
// function changeHeadingContent(){
//     const mainHeading = document.querySelector('#main-heading h1');
//     mainHeading.textContent = 'Heading 1';

// }
function addColor(){
    const element = document.getElementById('one');

    element.classList.add('highlight')

}
// function changeHeadingContent(){
//     document.getElementById('mainHeading').textContent="Heading Changed";
//     const element = document.getElementById('one');
//     element.classList.add('highlight')


//        }

// let buttonMouse = document.getElementById("contentChange");
// buttonMouse.addEventListener("click", event => {
//     document.getElementById('mainHeading').textContent="Heading Changed";
//     console.log(event.target);
//     console.log(event.clientX)
// });




// var phoneCount = 0;
// function addProduct(type){
    
//     phoneCount+=1;
//     console.log(phoneCount);

// }
// function deleteProduct(type){
//     phoneCount-=1;
//     console.log(phoneCount);

// }

// console.log(phoneCount)

function removeColor() {
    const element = document.getElementById('one');
    element.classList.remove('highlight')

}

// Event Listener

// function addNewElement() {
//     const newElement = document.createElement('div');
//     newElement.textContent = "Apple 5";
//     newElement.setAttribute('class', 'highlight');

//     const existingElement = document.getElementById('apples');
//     existingElement.appendChild(newElement);

// }


function addNewElement(event){
    const newElement = document.createElement('div');
    newElement.textContent = "Apple 5";
    newElement.setAttribute('class', 'highlight');
    const existingElement = document.getElementById('apples');
    existingElement.appendChild(newElement);  

}

document.getElementById("addDiv").addEventListener("click",(event)=>{

    console.log(event.target);
    console.log(event.clientX);
    console.log(event.clientY);
})

const outerDiv = document.getElementById("outerDiv");
const innerDiv = document.getElementById("innerDiv");
const button1 = document.getElementById("button1");


//Capturing
outerDiv.addEventListener('click', ()=>{
    console.log("Outer Div Clicked");
}, true)

innerDiv.addEventListener('click', (event)=>{
    console.log("Inner Div Clicked");
    event.stopPropagation();
}, true)
button1.addEventListener('click', ()=>{
    console.log("Button Clicked");
    
}, true)


//Bubbilng
outerDiv.addEventListener('click', ()=>{
    console.log("Outer Div Clicked");
} )

innerDiv.addEventListener('click', ()=>{
    console.log("Inner Div Clicked");
})
button1.addEventListener('click', ()=>{
    console.log("Button Clicked");
})

function fetchData() {
    return new Promise((resolve, reject) => {
      fetch('https://localhost:8000')
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error: ' + response.status);
          }
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
        .finally(() => console.log('Fetch operation completed.'));
    });
  }
  
  // Using the Promise
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  




