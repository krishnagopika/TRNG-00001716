const usersContainer = document.getElementById("container")
       

async function getUsers(){
    try{
    const data = await fetch("http://localhost:3000/users");
    const users = await data.json();
    console.log(users);

    await users.forEach(user => {
        console.log(user)
        const userElement = document.createElement('div');
        userElement.innerHTML = `
          <h2>${user.username}</h2>
          <p>Password: ${user.password}</p>
          <p>Address: ${user.address}</p>
        `;
  
        // Append the user element to the container
        usersContainer.appendChild(userElement);

        
    });
    }
    catch(error){
        console.log(error);
    }
    
}

window.addEventListener('load', getUsers);
