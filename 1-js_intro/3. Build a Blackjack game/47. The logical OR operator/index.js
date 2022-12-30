// Create two boolean variables, likesDocumentaries and likesStartups
let likesDocumentaries = true
let likesStartups = false
// Use an OR statement (||) to call recommendMovie() if either of those variables are true


function recommendMovie() {
    if (likesStartups || likesDocumentaries) {
        console.log("Hey, check out this new film we think you will like!")
    }
}

recommendMovie()