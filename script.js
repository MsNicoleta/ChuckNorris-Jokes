const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('joke');
const twitterBtn = document.getElementById('twitter');
const newJokeBtn = document.getElementById('new-joke');
const loader = document.getElementById('loader');

let apiJokes = [];


function showLoadingSpinner() {
    loader.hidden = false;
    jokeContainer.hidden = true;
}


function removeLoadingSpinner() {
    jokeContainer.hidden = false;
    loader.hidden = true;

}

    //Show new joke
function newJoke() {
    showLoadingSpinner();

    // Pick a random joke from apiJokes array
    // const joke = apiJokes[Math.floor(Math.random() * apiJokes.value.length)];
    const joke = apiJokes.value;
    //check jokeLength to determine styling
    // if (joke.text.length > 120) {
    //     jokeText.classList.add('long-joke');
    // } else {
    //      jokeText.classList.remove('long-joke');
    // }
    //Set Joke, Hide Loader
    jokeText.textContent = joke;
    removeLoadingSpinner();
    // }
}

    // Get Jokes From API
async function getJokes() { /* An asynchronous function can run at any time indipendently and it won't stop the browser from completing the loading of a page*/
    showLoadingSpinner();
  const apiUrl = 'https://api.chucknorris.io/jokes/random';
    try /* a try & catch allows us to attempt to complete a fetch request but if it doesn't work we can catch the error information   */ {
        const response = await fetch(apiUrl); /* the initial part of the string wont be populated until we won't receive the fetched data */
        apiJokes = await response.json();
        // debugger
        newJoke();
    } catch (error) {
        /* Error catch here */
        alert(error)

  }
}

// Tweet Joke
function tweetJoke() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${jokeText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newJokeBtn.addEventListener('click', newJoke)
twitterBtn.addEventListener('click', tweetJoke)
// On load
getJokes();

// if we would use our local jokes we would need to comment the function above  Get Jokes From API  and we would commet the getJokes and add  newJoke();  comment the empty Arrray at the top. also the apiJokes from other functions would need to be changed for  localJokes
