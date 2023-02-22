//Get quote from APi 

async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com'
    const apiUrl = 'https://forismatic.com/en/api?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error){
        getQuotes();
        console.log('woops, no quote', error);
    }
}


// on Load
getQuote();