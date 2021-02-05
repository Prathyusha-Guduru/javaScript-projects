//Todo-items object
class todoItems
{
	constructor(itemText){
		this.itemText = itemText
	}

}


//UI Class : handles UI tasks
class UI{	
	static displayItems(){
		let StoredItems =[
		]

		const items = StoredItems
		items.forEach((item)=> UI.addItemsToList(item))
	}

	static addItemsToList(item){
		let todoElementList = document.getElementById('todo-elements-list')
		let todoItem = document.createElement('div')
		todoItem.classList.add('item-container')
		todoItem.innerHTML = `<p>${item.itemText}</p><button class = "delete-button">Delete</button>`
		todoElementList.appendChild(todoItem)
	}

	static removeItemFromList(element){
		element.remove()
	}


}

//Handles local storage

//Event : Display books
document.addEventListener('DOMContentLoaded',UI.displayItems())
//Event : add a book


let itemInput = document.getElementById('add-item')
let itemEntryText = document.getElementById('item-entry-text')

itemInput.addEventListener('submit',(event)=>{
	event.preventDefault()
	let newItem = new todoItems(itemEntryText.value)
	// console.log(newItem);
	UI.addItemsToList(newItem)
})



//Event : Remove a book 
let listItems = document.getElementById('todo-elements-list')
listItems.addEventListener('click',(event)=>{
	console.log(event.target);
	UI.removeItemFromList(event.target.parentElement)
	
})

