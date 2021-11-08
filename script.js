let apiQuotes = [];

//  Get new Quote 
function newQuote() {
    // pick a random number 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quotes
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        //console.log(apiQuotes);
        newQuote();
    } catch {
        // 
    }
}

//On Load
getQuotes();