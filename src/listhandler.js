
import {ListMaker, makeItem} from "./listmaker";

//Handles all the todo lists
const ListHandler = (() =>{

	const returnList = (list) => {
		if(JSON.parse(localStorage.getItem('list'))){
			const list = JSON.parse(localStorage.getItem('list'));
					return list.map((object)=>{
						const newList = ListMaker(object.title, object.desc);
						for(const item of object.items){
						newList.addItem(makeItem(item.title, item.desc, item.due, item.priority, item.finished))
						}
					return newList;
				});
			}
			else return 0;
		}

	function defaultList(){
		console.log("Default list was called");
		const newlist = ListMaker("Your Title", "Your description here");
		newlist.addItem(makeItem("Title", "Description", "Afternoon", "Medium", false));
		return newlist;
	}

	const list =  returnList()||[defaultList()];

	function updateListStorage(){
		localStorage.setItem('list', JSON.stringify(list));
	}

	const addList = (newlist) => {
		list.push(newlist);
	};

	const removeList = (index) => {
		if(list.length>1){
			list.splice(index, 1);
		} else {clearLists();}
	};

	const clearLists = () => {
		list.length = 0;
		list.push(defaultList());
		localStorage.clear();
	}

	return {list, addList, removeList, clearLists, updateListStorage};
})();

export {ListHandler};