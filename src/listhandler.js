

//Module to make our list handler, since we only need one
const ListHandler = (() =>{
	const list = [
	//Friday
			{
				title : "Friday",
				desc : "Feed the kitty, pet the kitty",
				todolist: [
					{
						title: "Pet kitty",
						desc: "Pet the kitty cat",
						due: "Noon",
						priority: "High",
						finished: false,
					},
					{
						title: "Feed kitty",
						desc: "Feed the kitty cat",
						due: "Morning",
						priority: "High",
						finished: false,
					},
					{
						title: "Make dinner",
						desc: "Make Futo salmon burgers",
						due: "6 pm",
						priority: "High",
						finished: false,
					}
				]
			},
//Saturday
			{
				title : "Saturday",
				desc : "I need to go to work",
				todolist:[
					{
						title: "Get up",
						desc: "Get up at 6:30",
						due: "6:30",
						priority: "High",
						finished: false,
					},
					{
						title: "Get on bus",
						desc: "Get on the bus",
						due: "8:00 AM",
						priority: "High",
						finished: false,
					},
					{
						title: "Drink coffee",
						desc: "Drink all the coffee",
						due: "9 AM",
						priority: "High",
						finished: false,
					}
				]
			},
			{
				title : "Sunday",
				desc : "Lunch with Futo?",
				todolist:[
					{
						title: "Get up",
						desc: "Get up at 7:15",
						due: "7:15",
						priority: "Medium",
						finished: false,
					},
					{
						title: "Lunch with Futo?",
						desc: "Make or get lunch with Futo",
						due: "12 nono",
						priority: "Medium",
						finished: false,
					}
				
				]
			},
	];

	const findList = (title)=>{
		return list.find(item => item.title ===title);
	};

	const addList = (list) => {
		list.push(item);
	};

	const removeList = (title)=>{
		let index = list.findIndex(obj => obj.title===title);
		list.splice(index, 1);
	};

	return {list, findList, addList, removeList};
})();


export {ListHandler};