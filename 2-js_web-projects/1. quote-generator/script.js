let apiQuotes = []

// Show New Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() )]
}
// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes()