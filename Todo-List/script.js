let form = document.getElementById('form')
let listDisplay = document.getElementById('list-item-display')
form.addEventListener('submit',(event)=>{
	event.preventDefault()
	let newItem = document.getElementById('new-list-item')
	let newItemDisplay = document.createElement('div')
	newItemDisplay.classList.add('list-items')
	newItemDisplay.innerHTML = `<p class = "new-item-value">${newItem.value}</p> <input type="checkbox" class = "isChecked" name = "checkbox">`
	listDisplay.appendChild(newItemDisplay)
})


let checkBox = document.querySelectorAll("input[name = 'checkbox']")	
checkBox.forEach((element)=>{
	element.addEventListener('click',()=>{
		if(element.checked === true){
			document.querySelector('.new-item-value').style.textDecoration = "line-through"
		}
		else{
			document.querySelector('.new-item-value').style.textDecoration = "initial"
		}
	})
})