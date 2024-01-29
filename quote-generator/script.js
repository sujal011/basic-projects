apiUrl="https://api.quotable.io/random"

const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
console.log(quote);

async function generator(){
    const response= await fetch(apiUrl);
    var data = await response.json();
    console.log(data);

    quote.innerHTML = data.content;
    author.innerHTML= `- ${data.author}`;
}
generator()