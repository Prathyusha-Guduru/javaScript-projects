//Todo-items object
class todoItems
{
	constructor(itemText){
		this.itemText = itemText
	}

}

//Number of tasks
let numOfTasks = 0

//UI Class : handles UI tasks
class UI{	
	static displayItems(){
		let StoredItems =[]

		const items = StoredItems
		items.forEach((item)=> UI.addItemsToList(item))
	}

	static addItemsToList(item){
		let todoElementList = document.getElementById('todo-elements-list')
		let todoItem = document.createElement('div')
		todoItem.classList.add('item-container')
		// <button class = "delete-button">Delete</button>
		todoItem.innerHTML = `<p>${item.itemText}</p><img class = "delete-button" src = "assets/icons/delete.svg" width = "20">`
		todoElementList.appendChild(todoItem)
		numOfTasks+=1
		console.log(numOfTasks);
	} 

	static removeItemFromList(element){
		element.remove()
	}
}

//Handles local storage
class Storage{
	static getListItems(){
		
	}

	static addListItems(){

	}

	static removeListItems(){

	}
}


//Event : Display books
document.addEventListener('DOMContentLoaded',UI.displayItems())


//Event : add a book
let itemInput = document.getElementById('add-item')
let itemEntryText = document.getElementById('item-entry-text')
itemInput.addEventListener('submit',(event)=>{
	event.preventDefault()

	if(itemEntryText.value === ''){
		alert("Please enter a value")
	}
	else{
		let newItem = new todoItems(itemEntryText.value)
		UI.addItemsToList(newItem)
	}
})


//Event : Remove a book 
let listItems = document.getElementById('todo-elements-list')
listItems.addEventListener('click',(event)=>{
	if(event.target.classList.contains('delete-button')){
		UI.removeItemFromList(event.target.parentElement)
	}
	
})


//Interactivity events
itemEntryText.addEventListener(('click',()=>{
	itemEntryText.classList.add('single-line-border')
}))