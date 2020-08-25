import "./style.css";

const domStuff = (() =>{
		let listsDiv = document.getElementById('lists');
		let contentDiv = document.getElementById('content');
		let addlist = document.getElementById('addlist');
		let additem =document.getElementById('additem');

		addlist.addEventListener('click', newList);
		additem.addEventListener('click', newItem);

		function newList() {
		console.log("You're making a new list");
		}

		function newItem() {
			console.log("You're making a new item!");
		}	
})();

//Closure that will give each to do item its own id
let increment = (function(n) {
  return function() {
    n += 1;
    return n+"-ID";
  }
}(-1));

//To do item factory function
const ToDoItem = (title, desc, due, priority, finished, id) => {
	return {title, desc, due, priority, finished, id};
}

//List factory function
const ListMaker = (desc) => {
	let list = [];

	const addItem = (item) => {
		list.push(item);
	}

	const removeItem(id)=>{
		let index = list.findIndex(obj => obj.id===id);
		list.splice(index, 1);

	}
	return {list, addItem, removeItem};
}

//Hopefully this is a module
const ListHandler = (() =>{
	const list = [];

	const addList = (list) => {
		list.push(item);
	}

	const removeList = (desc)=>{
		let index = list.findIndex(obj => obj.desc===desc);
		list.splice(index, 1);
	}

	return {list, addList, removeList};

})();






