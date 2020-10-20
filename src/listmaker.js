
//List factory function
const ListMaker = (title, desc) => {

	let items = [];
	let edit = false;

	const addItem = (item) => {
		items.push(item);
	}

	const removeItem = (index) => {
		items.splice(index, 1);
	} 

	const getEdit = () => {
		return edit;
	}

	const setEdit = (value) => {
		edit = value;
	}

	return {title, desc, items, addItem, removeItem, getEdit, setEdit};
}

//To do item constructor
const makeItem = (title, desc, due, priority, finished) => {
	let edit = false;

	const getEdit = () => {
		return edit;
	}

	const setEdit = (bool) => {
		edit = bool;
		enumerable: false;
	}

	return {title, desc, due, priority, finished, getEdit, setEdit};
}

export {ListMaker, makeItem};