const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');

function addItemsToList() {
    console.log(textInput.value)
}

// Add Events Listener
addItem.addEventListener('click', addItemsToList);