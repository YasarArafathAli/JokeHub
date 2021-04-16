const jokeDiv = document.querySelector("#jokediv");
const jokeBtn = document.querySelector("#jokeBtn");


jokeBtn.addEventListener("click", () => {
    
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: 'application/json',
        },
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        jokeDiv.innerHTML = element(data)
    })
     
    jokeBtn.innerText = "Get another Joke"

})
    


function element(item) {
    return `<div><h2 class="joke"> ${ item.joke}</h2>
    </div>`
}