import "./style.css";
import forest from "./forest.jpg"
import {ListHandler} from "./listhandler";
import {ListMaker, makeItem} from "./listmaker";

//The default list isn't being made, so the render function is coming up empty
//Sooo we need to fix that 

window.addEventListener('load', () => {

 const leftBox = document.querySelector(".leftbox");
 const rightBox = document.querySelector(".rightbox");

function render(list, index){

	const parseItems = (object, index) => {
		return`<div class='details underlined ${object.finished ? "finished": ''}' data-index=${index}} ><i class='fas fa-edit itemicon' data-index=${index}></i>
					<div class='item para' data-property='title'><p>${object.title}</p></div>
					<div class='item para' data-property='desc'><p>${object.desc}</p></div>
					<div class='item para' data-property='due'><p>${object.due}</p></div>
					<div class='item para' data-property='priority'><p>${object.priority}</p></div>
					<div class='item checkbox' data-property='finished'><input type="checkbox" id='finished${index}' ${object.finished ? "checked": ''} disabled='true'><label for="finished${index}"></label>
</div>
					<i class='fas fa-trash itemicon' data-index=${index}></i></div>`;
	}

	const items = list.items;
	const HTML = items.map((object, index)=>parseItems(object, index)).join("");

	rightBox.innerHTML = `<h2 class='listtitle'>${list.title}</h2>
								<div class='listdesc'>
									<i class='fas fa-edit'></i>
									<p class="description">${list.desc}</p>
									<i class='fas fa-trash' data-index=${index}></i>
								</div>
							<div class='labels underlined'>
							<p>Title</p><p>Description</p><p>By when?</p><p>Priority</p><p>Finished</p>
							</div>` 
							+ HTML + `<div class='details underlined additemcontainer'><div class="additem"><p>Add</p><i class="fas fa-plus-circle"></i></div>`;
	rightBox.setAttribute('data-index', index);

	leftBox.innerHTML = ListHandler.list.map((object, index) => 
			`<div class="menu underlined" data-index=${index}><p>${object.title}</p></div>`)
			.join("") + 
			`<div class="menu underlined" id="add"><p>Add +</p></div>
			<div class="menu underlined" id="clear"><p>Clear lists</p></div>`;

	ListHandler.updateListStorage();
}

render(ListHandler.list[0], 0);

function menuSelect(e){
	if(e.target.parentElement.dataset.index){
		const index = e.target.parentElement.dataset.index;
		render(ListHandler.list[index], index);
	}
}

function editList(e){
	const currentList = ListHandler.list[rightBox.dataset.index];
	const title = rightBox.querySelector('.listtitle');
	const desc = rightBox.querySelector('.description');
	const edit = currentList.getEdit();

	const clicked = e.target;
	if(!clicked.classList.contains('fas')||clicked.classList.contains('itemicon')){
		return;
	} 

	if(clicked.classList.contains('fa-edit')){
		if(!edit){
			title.classList.toggle('selected');
			desc.classList.toggle('selected');
			[title.contentEditable, desc.contentEditable] = ['true', 'true'];
			currentList.setEdit(true);
		}
		else{
			title.classList.toggle('selected');
			desc.classList.toggle('selected');
			[title.contentEditable, desc.contentEditable] = ['false','false']; 
			[currentList.title, currentList.desc] = [title.textContent, desc.textContent];
			currentList.setEdit(false);
			render(currentList, rightBox.dataset.index);
			} 
	} 

	if(clicked.classList.contains('fa-trash')){
			if(window.confirm("Delete list?")){
			ListHandler.removeList(rightBox.dataset.index);
			render(ListHandler.list[0], 0);
		}
	}

}

function editItem(e){
	const clicked = e.target;
	if(!clicked.classList.contains('fas')||!clicked.classList.contains('itemicon')){
		return;
	} 

	const currentList = ListHandler.list[rightBox.dataset.index];
	const itemIndex = clicked.dataset.index;
	const item = currentList.items[itemIndex];
	const children = clicked.parentElement.querySelectorAll('.item');
	const edit = item.getEdit();

//edit item
	if(clicked.classList.contains('fa-edit')){
			if(!edit){
				clicked.parentElement.classList.toggle('selected');
				for(const child of children){
					child.classList.contains('para')? child.contentEditable = 'true' : child.firstChild.disabled=false;
					}
				item.setEdit(true);
			}
			else if(edit){
				clicked.parentElement.classList.toggle('selected');
				for(const child of children){
					if(child.classList.contains('para')){
						item[child.dataset.property]=child.textContent;
						child.contentEditable = 'false';
					} else{
					 	item[child.dataset.property]=child.firstChild.checked;
					 	child.firstChild.disabled=true;
					}
				}
				item.setEdit(false);
				render(currentList, rightBox.dataset.index);
			}
			
		}

	else if(clicked.classList.contains('fa-trash')){
		if(window.confirm("Delete item?")){
			currentList.removeItem(itemIndex);
			render(currentList, rightBox.dataset.index);
		}
	}
}


function addItem(e){
	if(!e.target.parentElement.classList.contains("additem")){
		return;
		}
	else{
		const currentList = ListHandler.list[rightBox.dataset.index];
		currentList.addItem(makeItem("Title", "Description", "Morning", "High", false));
		render(currentList, rightBox.dataset.index);
	}
}

function addButton(e){
	if(e.target.parentElement.id=="add"){
		const list = ListMaker("Your Title", "Your description here");
		list.addItem(makeItem("Title", "Description", "Afternoon", "Medium", false)); 
		ListHandler.addList(list);
		render(list, ListHandler.list.length-1);
	}
}

function clearLists(e){
	if(e.target.parentElement.id=="clear"&&window.confirm("Delete all of your lists?")){
		ListHandler.clearLists();
		render(ListHandler.list[0], 0);
	}
}

leftBox.addEventListener('click', menuSelect); 
leftBox.addEventListener('click', addButton);
leftBox.addEventListener('click', clearLists);
rightBox.addEventListener('click', editList);
rightBox.addEventListener('click', editItem);
rightBox.addEventListener('click', addItem);

});







	
