//-------------------------------------------------------------------
// Check input validity
// Toggle buttons state
//-------------------------------------------------------------------

const addButton = document.querySelector('.input-block__btn-add');
const inputItem = document.querySelector('.input-block__item');
const inputError = document.querySelector('.input-block__error');


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
	// don't allow repeated items
	return errMsg;
};

const showErrorMessage = function(input, error) {
	input.classList.add('input-block__item_type_error');
	error.classList.add('input-block__error_visible');
};

const hideErrorMessage = function(input, error) {
	input.classList.remove('input-block__item_type_error');
	error.classList.remove('input-block__error_visible');
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
	toggleAddButton(isValid && !isEmpty);
	toggleEditButtons(isEmpty);
}
