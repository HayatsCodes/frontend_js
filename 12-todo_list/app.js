const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');

let isChecked = false;
let isFocus = false;

// Icons Function

function iconsEventListener() {
    const checkIcons = document.querySelectorAll('.fa-check');
    checkIcons.forEach(checkIcon => {
        checkIcon.addEventListener('click', markItemAsChecked)
    });

    const penIcons = document.querySelectorAll('.fa-pen');
    penIcons.forEach(penIcon => {
        penIcon.addEventListener('click', editItem);
    });
}


function addItemsToList() {
    if (textInput.value) {
        itemsWrapper.innerHTML += ` <li class="items-list">
        <span contenteditable="false">${textInput.value}</span>
        <span> <i class="fas fa-check"></i>
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash"></i>
        </span>
    </li>`
        textInput.value = '';
        iconsEventListener();
    }
}


function markItemAsChecked(e) {
    const textSpan = e.target.parentNode.previousElementSibling;
    if (!isChecked) {
        textSpan.style.textDecoration = 'line-through red 3px';
        isChecked = true;
    } else {
        textSpan.style.textDecoration = 'none';
        isChecked = false;
    }
}

function editItem(e) {
    const textSpan = e.target.parentNode.previousElementSibling;
    textSpan.setAttribute("onkeypress","return (this.innerText.length <= 35)");
    textSpan.setAttribute("contenteditable", "true");
    textSpan.focus();
    textSpan.addEventListener('blur', () => {
        if (textSpan.innerText.length < 1) {
            e.preventDefault();
            textSpan.textDecoration = 'underline red 3px'
        } else {
            textSpan.setAttribute("contenteditable", "false");
        }
    });
}

// Add Events Listener
addItem.addEventListener('click', addItemsToList);