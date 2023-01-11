const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');
const clearItems = document.getElementById('clear-items');

let isChecked = false;

function iconsEventListener() {
    const checkIcons = document.querySelectorAll('.fa-check');
    checkIcons.forEach(checkIcon => {
        checkIcon.addEventListener('click', markItemAsChecked)
    });

    const penIcons = document.querySelectorAll('.fa-pen');
    penIcons.forEach(penIcon => {
        penIcon.addEventListener('click', editItem);
    });

    const trashIcons = document.querySelectorAll('.fa-trash');
    trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', deleteItem);
    })
}


function addItemsToList() {
    if (textInput.value) {
        const listsInItemsWrapper = itemsWrapper.childNodes;
        console.log(listsInItemsWrapper);
        if (listsInItemsWrapper.length <= 14) {
            itemsWrapper.innerHTML += ` <li class="items-list">
        <span contenteditable="false">${textInput.value}</span>
        <span> <i class="fas fa-check"></i>
            <i class="fas fa-pen"></i>
            <i class="fas fa-trash"></i>
        </span>
    </li>`
            textInput.value = '';
            iconsEventListener();
            localStorage.setItem('toDoItems', JSON.stringify((itemsWrapper.childNodes)));
        }

    }
}


function markItemAsChecked(e) {
    const textSpan = e.target.parentNode.previousElementSibling;
    if (!isChecked) {
        textSpan.style.textDecoration = 'line-through red 2px';
        isChecked = true;
    } else {
        textSpan.style.textDecoration = 'none';
        isChecked = false;
    }
}

function editItem(e) {
    if (!isChecked) {
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

function deleteItem(e) {
    const li = e.target.parentNode.parentNode;
    li.remove();
}

function clearAllItems() {
    itemsWrapper.innerHTML = "";
}

// Add Events Listener
addItem.addEventListener('click', addItemsToList);
clearItems.addEventListener('click', clearAllItems);

// On Load
if (localStorage) {
    let toDoItems = JSON.parse(localStorage.getItem("toDoItems"));
    console.log(toDoItems);
}
