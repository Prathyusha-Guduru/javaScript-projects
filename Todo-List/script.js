let listItemDisplay = document.getElementById('list-item-display')
let newItemInputForm = document.getElementById('form')
let list = []
let n = 0
newItemInputForm.addEventListener('submit',(event)=>{
	event.preventDefault()
	n+=1
	let newListEntry = document.getElementById('new-list-item-entry').value
	let newListDiv = document.createElement('div')
	newListDiv.setAttribute("id",`${n}`)
	newListDiv.classList.add('list-items')
	newListDiv.innerHTML = `<p class = "${n}p">${newListEntry}</p> <input class = "${n}checked" type = "checkbox" name = "checkbox">`
	listItemDisplay.appendChild(newListDiv)
	let checkBoxes = document.querySelectorAll('input[type = "checkbox"]')
	checkBoxes.forEach((element)=>
	{
		element.addEventListener('click',()=>{
			if(element.checked === true){
				let elementClass = element.className
				let elementContent = document.getElementsByClassName(elementClass[0]+'p')[0]
				elementContent.style.textDecoration = "line-through"
			}
			else if(element.checked === false){
				let elementClass = element.className
				let elementContent = document.getElementsByClassName(elementClass[0]+'p')[0]
				elementContent.style.textDecoration = "initial"
			}
		})
	})

})







