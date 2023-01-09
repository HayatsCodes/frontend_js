const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');
let checkIcons = document.getElementById('hidden-wrapper');

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
    checkIcons = document.querySelectorAll('.fa-check');
}








// Add Events Listener
addItem.addEventListener('click', addItemsToList);
checkIcons.addEventListener('click', markItemAsChecked);