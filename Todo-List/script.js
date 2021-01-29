let form = document.getElementById('form')
let listDisplay = document.getElementById('list-item-display')
form.addEventListener('submit',(event)=>{
	event.preventDefault()
	let newItem = document.getElementById('new-list-item')
	let newItemDisplay = document.createElement('p')
	newItemDisplay.innerHTML = newItem.value
	listDisplay.appendChild(new)
})