//Global variables
const cardArray = [
	{
		name : 'card1',
		img  : 'assets/images/memory-card-1.jpg'
	},
	{
		name : 'card1',
		img  : 'assets/images/memory-card-1.jpg'
	},
	{
		name : 'card2',
		img  : 'assets/images/memory-card-2.jpg'
	},
	{
		name : 'card2',
		img  : 'assets/images/memory-card-2.jpg'
	},
	{
		name : 'card3',
		img  : 'assets/images/memory-card-3.jpg'
	},
	{
		name : 'card3',
		img  : 'assets/images/memory-card-3.jpg'
	},
	{
		name : 'card4',
		img  : 'assets/images/memory-card-4.jpg'
	},
	{
		name : 'card4',
		img  : 'assets/images/memory-card-4.jpg'
	},
	{
		name : 'card5',
		img  : 'assets/images/memory-card-5.jpg'
	},
	{
		name : 'card5',
		img  : 'assets/images/memory-card-5.jpg'
	},
	{
		name : 'card6',
		img  : 'assets/images/memory-card-6.jpg'
	},
	{
		name : 'card6',
		img  : 'assets/images/memory-card-6.jpg'
	}
]


const grid = document.getElementsByClassName('grid')[0]
let cardsChosenPair = []
let cardsChosenPairId = []
let cardsWon = []
let status = document.getElementById('status')
let scoreNumber = 0
let startButton = document.getElementById('start')
let timerSection = document.getElementById('timer')
let timeLeft = 30

//Shuffling the cards using sort()
cardArray.sort(()=> Math.random() - 0.5)

//Creating the game board
function createGameBoard(){
	for(let i=0;i<cardArray.length;i++){
		let card = document.createElement('img')
		card.setAttribute('src','assets/images/cover-image.png')
		card.setAttribute('id',i)
		card.addEventListener('click',flipCard)
		grid.appendChild(card)
	}
}

//For checking if the cards match or not
function checkCardsMatch(){
	let firstChosenCardId = cardsChosenPairId[0]
	let secondChosenCardId = cardsChosenPairId[1]
	let allCards = document.querySelectorAll('img')
	if(cardArray[firstChosenCardId].img === cardArray[secondChosenCardId].img && firstChosenCardId != secondChosenCardId){
		alert("Huray you found a match!")
		allCards[firstChosenCardId].setAttribute('src','assets/images/blank-image.png')
		allCards[secondChosenCardId].setAttribute('src','assets/images/blank-image.png')
		cardsWon.push(cardsChosenPair)
		scoreNumber++
		status.innerHTML = `<h3 class="score">Score : ${scoreNumber} </h3>`
	}
	else if(firstChosenCardId === secondChosenCardId || cardArray[firstChosenCardId].img != cardArray[secondChosenCardId].img){
		alert("Oops! Try Again")
		allCards[firstChosenCardId].setAttribute('src','assets/images/cover-image.png')
		allCards[secondChosenCardId].setAttribute('src','assets/images/cover-image.png')
	}
	cardsChosenPair = []
	cardsChosenPairId = []

}

//Flipping the cards
function flipCard(){
	let cardId = this.getAttribute('id')
	for(let i=0;i<cardsWon.length;i++){
		if (cardsWon[i][0] === cardArray[cardId] || cardsWon[i][1] === cardArray[cardId]){
			alert("already done")
			return
		}
	}
		this.setAttribute('src',cardArray[cardId].img)
		cardsChosenPair.push(cardArray[cardId])
		cardsChosenPairId.push(cardId)

		if(cardsChosenPair.length === 2){
			setTimeout(checkCardsMatch,500)
		}

}


function timer() 
{
	let timeDisplay = document.createElement('h1')
	if(timeLeft <=0){
		clearInterval(timeLeft = 0)

	}
	if(timeLeft <=0){
		
	}
	setInterval(function(){
		timeLeft-=1
		timeDisplay.innerHTML = `${timeLeft}`
		timerSection.appendChild(timeDisplay)
	},1000)
}

startButton.addEventListener('click',()=>{
	createGameBoard()
	startButton.style.visibility = 'hidden'
	timer()
})








