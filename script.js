document.addEventListener('DOMContentLoaded', () => {
const jokeContainer = document.getElementById('joke-container');
const jokeText = document.getElementById('jokes');
const newJokeBtn = document.getElementById('newjoke');
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
    const joke = apiJokes.value;
    jokeText.textContent = joke;
    removeLoadingSpinner();


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


//Event Listeners
newJokeBtn.addEventListener('click',getJokes)

// On load
getJokes();

// if we would use our local jokes we would need to comment the function above  Get Jokes From API  and we would commet the getJokes and add  newJoke();  comment the empty Arrray at the top. also the apiJokes from other functions would need to be changed for  localJokes
});