//List factory function
const ListMaker = (title, desc) => {
	let todolist = [];

	const addItem = (item) => {
		todolist.push(item);
	}

	const removeItem = (title) => {
		let index = todolist.findIndex(obj => obj.title===title);
		todolist.splice(index, 1);

	}
	return {title, desc, todolist, addItem, removeItem};
}

export {ListMaker};