
//-------------------------------------------------------------------
// Create list 
//-------------------------------------------------------------------
const shoppingList = ['Apples', 'Pears', 'Oranges'];

const list = document.querySelector('.list');


const createButton = function(btnClass, btnText, btnAction) {
	const btn = document.createElement('button');
	btn.classList.add('root__btn');
	btn.classList.add('list__btn');
	btn.classList.add(btnClass);
	btn.title = btnText;
	btn.addEventListener('click', btnAction);
	return btn;
};

const createText = function(txtClass, txtContent) {
	const txt = document.createElement('p');
	txt.classList.add(txtClass);
	txt.textContent = txtContent;
	return txt;
};

const createListItem = function(text) {
	const li = document.createElement('li');
	const sym = createText('list__symbol', `\u26AB`);
	const txt = createText('list__text', text);
	const delButton = createButton('list__btn_action_delete', 'Delete', deleteItem);
	const editButton = createButton('list__btn_action_edit', 'Edit', editItem);

	li.classList.add('list__item');
	li.append(sym, txt, editButton, delButton);
	return li;
};

//-------------------------------------------------------------------
// Create new list item

const addListItem = function() {
	if (inputLength(inputItem) === 0 ) { return; }
	const item = createListItem(inputItem.value);
	list.append(item);
	inputItem.value = '';
	toggleButtons();
};

//-------------------------------------------------------------------
// Create initial shopping list

const initShoppingList = function(itemsArray) {
	itemsArray.forEach( itemTxt => {
		list.append(createListItem(itemTxt));
	});
	toggleButtons();
};

