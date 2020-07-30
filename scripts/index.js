
const keyEnter = 'Enter';
const keyESC = 'Escape';

let editedItem = null;

//-------------------------------------------------------------------
// Event listeners (edit and delete)

const deleteItem = function(evt) {
	const item = evt.target.closest('.list__item');
	item.remove();
	inputItem.focus();
};

const editItem = function(evt) {
	editedItem = evt.target.closest('.list__item');
	inputItem.value = editedItem.querySelector('.list__text').textContent;
	addButton.textContent = 'Save';
	toggleButtons();
	inputItem.focus();
};

const saveEditedItem = function() {
	editedItem.querySelector('.list__text').textContent = inputItem.value;
	inputItem.value = '';
	addButton.textContent = 'Add';
	editedItem = null;
	toggleButtons();
};

//-------------------------------------------------------------------
// Event listeners

const addButtonClick = function() {
	if (editedItem) {
		saveEditedItem();
	} else { 
		addListItem();
	}
};

const inputKeyPress = function(evt) {
	switch(evt.code) {
		case keyEnter:
				if (!addButton.disabled) addButtonClick();
				break;
		case keyESC:
				if (editedItem) {
						editedItem = null;
						addButton.textContent = 'Add';
				}
				if (inputError.classList.contains('input-block__error_visible')) {
					hideErrorMessage(inputItem, inputError);
				}
				inputItem.value = '';
				toggleButtons();
				break;
		default:	
		}
};

//-------------------------------------------------------------------

initShoppingList(shoppingList);
addButton.addEventListener('click', addButtonClick);
inputItem.addEventListener('keyup', inputKeyPress);
inputItem.addEventListener('input', inputCheckValidity);
