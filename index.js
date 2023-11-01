const btn = document.querySelector('.btn');
const para = document.querySelector('.joke-para');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

btn.addEventListener('click', fetchData);

async function fetchData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        // para.textContent = `${result.joke}`;
        para.textContent = result.joke;
        console.log(result)
    } catch (error) {
        console.error(error);
    }
}

fetchData();


