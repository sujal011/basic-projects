apiUrl="https://api.quotable.io/random"

//meme api url - https://meme-api.com/gimme/2

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

function twitt(){
    window.open(`https://twitter.com/intent/tweet?text=${data.content}`,"Twitt","width=200,height=100")
}