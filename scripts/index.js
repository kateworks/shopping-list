//-------------------------------------------------------------------
// Event listeners
//-------------------------------------------------------------------

const deleteItem = function(evt) {
	const item = evt.target.closest('.list__item');
	item.remove();
	listArray = getItemsArray();
	inputItem.focus();
};

const editItem = function(evt) {
	editedItem = evt.target.closest('.list__item');
	inputItem.value = editedItem.querySelector('.list__text').textContent;

	const ind = listArray.indexOf(inputItem.value.toLowerCase());
	listArray.splice(ind, 1);

	addButton.textContent = 'Save';
	toggleButtons();
	inputItem.focus();
};

const addButtonClick = function(evt) {
	evt.preventDefault();
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
				if (editedItem) resetEditedContext();
				if (inputError.classList.contains('input-form__error_visible')) {
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
listArray = getItemsArray();
addButton.addEventListener('click', addButtonClick);
inputItem.addEventListener('keyup', inputKeyPress);
inputItem.addEventListener('input', inputCheckValidity);
