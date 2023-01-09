const addItem = document.getElementById('add-item');
const itemsWrapper = document.querySelector('ul');
const textInput = document.getElementById('text-input');

isElementInItemsWrapper = itemsWrapper.hasChildNodes();

function addItemsToList() {
    if (textInput.value) {
      // Create a new li element
      const li = document.createElement('li');
      li.classList.add('items-list');
  
      // Create the span elements for the text and icons
      const textSpan = document.createElement('span');
      textSpan.textContent = textInput.value;
      const iconsSpan = document.createElement('span');
  
      // Create the icons and append them to the icons span
      const checkIcon = document.createElement('i');
      checkIcon.classList.add('fas', 'fa-check');
      const penIcon = document.createElement('i');
      penIcon.classList.add('fas', 'fa-pen');
      const trashIcon = document.createElement('i');
      trashIcon.classList.add('fas', 'fa-trash');
      iconsSpan.appendChild(checkIcon);
      iconsSpan.appendChild(penIcon);
      iconsSpan.appendChild(trashIcon);
  
      // Append the text and icons spans to the li element
      li.appendChild(textSpan);
      li.appendChild(iconsSpan);
  
      // Append the li element to the ul element
      itemsWrapper.appendChild(li);
  
      textInput.value = '';
    }
  }
  
 
const checkIcons = document.querySelectorAll('.fa-check');
checkIcons.forEach(checkIcon => {
  checkIcon.addEventListener('click', event => {
    const li = event.target.parentNode.parentNode;
    li.classList.toggle('completed');
  });
});


// Add Events Listener
addItem.addEventListener('click', addItemsToList);