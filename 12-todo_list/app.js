const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');
let checkIcons;


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
        checkIcons = document.querySelectorAll('.fa-check');        
    }
}

checkIcons.forEach(checkIcon => {
    console.log(checkIcons);
    checkIcon.addEventListener('click', event => {
        const li = event.target.parentNode.parentNode;
        console.log(li);
        li.classLists.toggle('completed');
    });
});


// Add Events Listener
addItem.addEventListener('click', addItemsToList);