//RESUELVE TUS EJERCICIOS AQUI
//EJERCICIO 1
function getAllBreeds () {
    

return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(breed => Object.keys(breed.message))
        .catch(function(error){
                console.log(error)
            })
}


//EJERCICIO 2
function getRandomDog() {
    
    return fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(breed => breed.message)
}

//EJERCICIO 3
function getAllImagesByBreed() {
    return fetch("https://dog.ceo/api/breed/komondor/images")
    .then(response => response.json())
    .then(breed => breed.message)
}


//EJERCICIO 4
function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(data => data.message)
}





//EJERCICIO 5
function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => data)
}


//EJERCICIO 6 

function printGithubUserProfile(username) {
 return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {

        let img = document.createElement("img");
        img.src = data.avatar_url;

        let name = document.createElement("p");
        name.innerHTML = data.name;
        document.body.appendChild(img);
        document.body.appendChild(name);

        let obj = {
            name: data.name,
            img: data.avatar_url
        };

        return obj
    })
}




//EJERCICIO 7
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
        let lista = `<section>
                        <img src="${data.avatar_url}" alt="${data.name}">
                        <h1>${data.name}</h1>
                        <p>Public repos: ${data.public_repos}</p>
                    </section>`

        return lista;
    })
}


//EJERCICIO 8 NO ME DEJA LEER EL EVENT LISTENER
// let form = document.getElementById("form-ej-8");
// form.addEventListener("submit", function(event) {

//     event.preventDefault();
//     console.log(event);
// });


//EJERCICIO 9
function fetchGithubUsers(userNames) {
    let promiseArr = []

    for (let i = 0; i < userNames.length; i++) {
        let promise = fetch(`https://api.github.com/users/${userNames[i]}`)
        .then(response => response.json())
        .then(data => data) 

        promiseArr.push(promise)
    }

    return Promise.all(promiseArr)
    .then(data => {
        for (let i = 0; i < promiseArr.length; i++) {
            console.log(data[i].repos_url);
            console.log(data[i].name);
        }
    })
}