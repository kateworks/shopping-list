//-------------------------------------------------------------------
// Check input validity
// Toggle buttons state
//-------------------------------------------------------------------

const inputLength = function(input) {
	return input.value.length;
};

const toggleAddButton = function(enabled) {
	addButton.disabled = !enabled;
};

const toggleEditButtons = function(enabled) {
	const items = Array.from(list.children);
	items.forEach(item => {
		const buttons = Array.from(item.querySelectorAll('.list__btn'));
		buttons.forEach(btn => {
			btn.disabled = !enabled;
		});
	});
};

const toggleButtons = function() {
	const isEmpty = (inputLength(inputItem) === 0);
	toggleAddButton(!isEmpty);
	toggleEditButtons(isEmpty);
};

const checkInput = function(input) {
	const len = inputLength(input);
	let errMsg = '';

	if (len < 3 && len > 0) {
		errMsg = 'New item must be at least 3 symbols long';
	} 
	if (listArray.indexOf(input.value.toLowerCase()) >= 0) {
		errMsg = 'That item is already on the list';
	}
	return errMsg;
};

const showErrorMessage = function(input, error) {
	input.classList.add('input-form__item_type_error');
	error.classList.add('input-form__error_visible');
};

const hideErrorMessage = function(input, error) {
	input.classList.remove('input-form__item_type_error');
	error.classList.remove('input-form__error_visible');
}

const resetEditedContext = function() {
	editedItem = null;
	addButton.textContent = 'Add';
	listArray = getItemsArray();
}

const inputCheckValidity = function(evt) {
	const input = evt.target;
	const errorMsg = checkInput(input);
	const isValid = !errorMsg;
	const isEmpty = (inputLength(input) === 0);

	inputError.textContent = errorMsg;
	
	if (!isValid) {
		showErrorMessage(input, inputError);
	} else {
		hideErrorMessage(input, inputError);
	}

	if (isEmpty && editedItem) resetEditedContext();
	toggleAddButton(isValid && !isEmpty);
	toggleEditButtons(isEmpty);
}
