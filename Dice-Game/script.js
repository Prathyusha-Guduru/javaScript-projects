let diceImages = ['assets/images/dice-1.jpg','assets/images/dice-2.jpg','assets/images/dice-3.jpg','assets/images/dice-4.jpg','assets/images/dice-5.jpg','assets/images/dice-6.jpg']
let randomNumber1 = Math.floor(Math.random() * diceImages.length)
let randomNumber2 = Math.floor(Math.random()*diceImages.length)
let playButton = document.getElementById('play-button');
playButton.addEventListener('click',(event)=>{
	event.preventDefault()
	
})