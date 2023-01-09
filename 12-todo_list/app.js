const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');
let checkIcons = document.querySelector('ul');


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

function markItemAsChecked(e) {
    console.log('checkIcons', checkIcons);
    checkIcons.forEach(checkIcon => {
            const textSpan = e.target.parentNode.previousElementSibling;
            console.log(textSpan);
            const i = document.createElement('i');
            i.classList.add('fa-');
            i.classList.add('fa-circle-check');
            textSpan.append(i);
        });
    };



// Add Events Listener
addItem.addEventListener('click', addItemsToList);
checkIcons.addEventListener('click', markItemAsChecked);