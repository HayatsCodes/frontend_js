const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');



function addItemsToList() {
    if (textInput.value) {
        itemsWrapper.innerHTML += ` <li class="items-list">
        <span>${textInput.value}</span>
        <span> <i class="fas fa-check"></i>
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash"></i>
        </span>
    </li>`
        textInput.value = '';
    }
}

console.log(itemsWrapper.hasChildNodes())

 
if (itemsWrapper.hasChildNodes()) {
    const checkIcons = document.querySelectorAll('.fa-check');
    checkIcons.forEach(checkIcon => {
        checkIcon.addEventListener('click', event => {
            const li = event.target.parentNode.parentNode;
            li.style.textDecoration = 'line-through';
            li.style.color = 'red';
        });
    });
}

// Add Events Listener
addItem.addEventListener('click', addItemsToList);