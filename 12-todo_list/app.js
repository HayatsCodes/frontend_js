const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');

let isChecked = false;
let isFocused = false;

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
    if (!isFocused) {
        
    }
}

function editItem(e) {
    if (!isChecked) {
        isFocused = true;
        const textSpan = e.target.parentNode.previousElementSibling;
        textSpan.setAttribute("onkeypress", "return (this.innerText.length <= 35)");
        textSpan.setAttribute("contenteditable", "true");
        textSpan.focus();
        textSpan.style.outline = " 0px solid black";
        textSpan.addEventListener('blur', (event) => {
            if (textSpan.innerText.length < 1) {
                event.preventDefault();
                textSpan.focus();
                textSpan.style.caretColor = 'red';
            } else {
                textSpan.setAttribute("contenteditable", "false");
                textSpan.style.caretColor = 'black';
            }
        });
    }
}

// Add Events Listener
addItem.addEventListener('click', addItemsToList);