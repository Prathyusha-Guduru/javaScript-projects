let diceImages = ['assets/images/dice-1.jpg','assets/images/dice-2.jpg','assets/images/dice-3.jpg','assets/images/dice-4.jpg','assets/images/dice-5.jpg','assets/images/dice-6.jpg']
let playButton = document.getElementById('play-button')
let winner
let draw = false
let result = document.getElementById('result')


playButton.addEventListener('click',(event)=>{
	event.preventDefault()
	let randomNumber1 = Math.floor(Math.random() * diceImages.length)
	let randomNumber2 = Math.floor(Math.random()*diceImages.length)
	
	randomNumber1>randomNumber2 ? winner = "Player 1" : winner = "Player 2"
	randomNumber1 === randomNumber2 ? draw = true : draw = false
	if(draw === false){
		result.innerHTML = `<h2>${winner} wins</h2>`
	}
	else if(draw === true){
		result.innerHTML = `<h2>It is a draw!</h2>`
	}
	console.log(`randomNumber1 : ${randomNumber1} and randomNumber2 : ${randomNumber2}`);
})