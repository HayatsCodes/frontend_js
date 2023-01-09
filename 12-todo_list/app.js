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
        const checkIcons = document.querySelectorAll('.fa-check');
        
        function markItemAsChecked(e) {
            console.log('checkIcons', checkIcons);
            checkIcons.forEach(() => {
                const textSpan = e.target.parentNode.previousElementSibling;
                console.log(textSpan);
                textSpan.style.textDecoration = 'line-through red 3px';
            });
        };
        checkIcons.addEventListener('click', markItemAsChecked);
    }
}









// Add Events Listener
addItem.addEventListener('click', addItemsToList);