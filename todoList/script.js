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
			{
				itemText : "Complete assignment"
			},
			{
				itemText : "Submit assignment"
			}
		]

		const items = StoredItems
		items.forEach((item)=> UI.addItemsToList(item))
	}

	static addItemsToList(item){
		let todoElementList = document.getElementById('todo-elements-list')
		let todoItem = document.createElement('div')
		todoItem.innerHTML = `<p>${item.itemText}</p><button class = "delete-button">Delete</button>`
		todoElementList.appendChild(todoItem)
	}

	static removeItemsFromList(item)

}

//Handles local storage

//Event : Display books
document.addEventListener('DOMContentLoaded',UI.displayItems())
//Event : add a book
let itemInput = document.getElementById('add-item')
let itemEntryText = document.getElementById('item-entry-text')
let newListItem = new todoItems(itemEntryText)
console.log();
itemInput.addEventListener('submit',(event)=>{
	event.preventDefault()
	UI.addItemsToList({itemText : itemEntryText.value})
})
//Event : Remove a book 
