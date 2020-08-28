const formStuff  = (() =>{ 

		//List form and submit button
		let listForm = document.getElementById('listform');
		let title = document.getElementById('title');
		let desc = document.getElementById('description');
		let finishedList = document.getElementById('finishedlist');

		//event listeners
		/*finishedList.addEventListener('click', newList); This is the problem*/
		/*Why is it the problem?*/

		const showForm = () => {
			listForm.style.display = "inline";
		}

		const hideForm = () => {
			listForm.style.display = "none";

		}

		const newList = () =>{
			console.log("testing if this is the problem");
			/* let thelist = ListMaker(title, desc);
			ListHandler.addList(thelist);
			console.log(thelist);
			hideForm();*/
		}

	return {showForm, hideForm, newList};

})();

export {formStuff};

