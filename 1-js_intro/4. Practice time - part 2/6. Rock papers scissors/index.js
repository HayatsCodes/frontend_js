let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getItems() {
    let randomNumber = Math.floor(Math.random() * 3)
    return hands[randomNumber]
}

myItem = getItems()
console.log(myItem)

