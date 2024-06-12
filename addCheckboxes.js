console.log('addCheckboxes.js loaded');

// Add checkboxes to each conversation
function addCheckboxes() {
  console.log('Adding checkboxes to conversations...', Selectors);
  const conversations = document.querySelectorAll(Selectors.CONVERSATION_SELECTOR);

  conversations.forEach((conversation, index) => {
    let checkbox = conversation.querySelector(`.${CHECKBOX_CLASS}`);

    // If the checkbox does not exist, create and insert it
    if (!checkbox) {
      checkbox = createCheckbox(index);
      conversation.insertAdjacentElement('afterbegin', checkbox);
    }
  });
}

// Create a new checkbox element
function createCheckbox(index) {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = CHECKBOX_CLASS;
  checkbox.dataset.index = index;

  // Only toggle the checkbox when it's directly clicked
  checkbox.addEventListener('click', (event) => {
    event.stopPropagation(); 
  });

  return checkbox;
}

addCheckboxes();
