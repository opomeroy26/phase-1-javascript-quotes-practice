//GLOBAL VARIABLES
const URL = "http://localhost:3000/quotes"



// DOM SELECTORS
const quotesLocation = document.querySelector("#quote-list")
const form = document.querySelector('#new-quote-form')



//LISTENERS
form.addEventListener("submit", (e) => createNewQuote(e))





//FETCH
function getQuotes() {
    return fetch(URL)
    .then(resp => resp.json())
   
}


//RENDER FUNCTIONS
function renderAllQuotes(quotesArr) {
    quotesArr.forEach(arrayObj => renderEachQuote(arrayObj))
}

function renderEachQuote(arrayObj) {
    const li = document.createElement("li")
    quotesLocation.appendChild(li)
    li.innerHTML = `
    <blockquote class="blockquote">
      <p class="mb-0">${arrayObj.quote}</p>
      <footer class="blockquote-footer">${arrayObj.author}</footer>
      <br>
      <button class='btn-success'>Likes: <span>0</span></button>
      <button class='btn-danger'>Delete</button>
    </blockquote> `

const deleteBtn = li.querySelector('.btn-danger')
deleteBtn.addEventListener("click", () => li.remove())

const likeBtn = li.querySelector('.btn-success')
likeBtn.addEventListener("click", () => handleAddLike(li))
}


//EVENT HANDLERS
function createNewQuote(e){
    e.preventDefault()
    const quote = e.target.quote.value
    const author = e.target.author.value

    const newQuote= {
        quote: quote,
        author: author,
    }
renderEachQuote(newQuote)
form.reset()
}

function handleAddLike(li) {
    const likeSpan = li.querySelector('span')
    const likes = parseInt(likeSpan.textContent)
    likeSpan.textContent = likes + 1
}


//INVOKE FUNCTION
getQuotes().then(quotesArr => renderAllQuotes(quotesArr))