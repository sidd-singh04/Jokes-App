const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url ="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

async function getJoke(){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data.joke);   
    joke.innerText = data.joke;
}

btn.addEventListener("click", getJoke);