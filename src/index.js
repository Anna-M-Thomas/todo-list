import "./style.css";
import {increment} from './idmaker';
import {ToDoItem} from './todoitem';
import {ListMaker} from './listmaker';
import {ListHandler} from './listhandler';
import {formStuff} from './formstuff';


const showTabs = (() =>{
	//div
	let listsDiv = document.getElementById('lists');

	for(let list of ListHandler.list){
		let button = document.createElement('button');
		button.setAttribute("class", 'list');
		button.setAttribute("id", list.title);
		button.textContent = list.title;
		listsDiv.appendChild(button);
	}

	let addbutton = document.createElement('button');
	addbutton.setAttribute("class", 'list');
	addbutton.setAttribute("id", 'addlist');
	addbutton.textContent = "Add";
	listsDiv.appendChild(addbutton);

})();

const switchContent = (() =>{
	//divs
	let contentDiv = document.getElementById('content');
	let lists = document.getElementById('lists');

		lists.addEventListener('click', function(e){
			if (event.target.nodeName == "BUTTON") {
				if(event.target.id ==('addlist')){
					formStuff.showForm();
				} else {
					let id = event.target.id;
					let tabbedlist = ListHandler.findList(id);
					let p = document.createElement('p');
					p.textContent = `Title: ${tabbedlist.title} Description: ${tabbedlist.desc} and todo items come later`;
					contentDiv.appendChild.p;
				}
			}
		});

})();


