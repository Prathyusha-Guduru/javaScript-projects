const cardArray = [
	{
		name : 'card1',
		img  : 'assets/images/memory-card-1.png'
	},
	{
		name : 'card1',
		img  : 'assets/images/memory-card-1.png'
	},
	{
		name : 'card2',
		img  : 'assets/images/memory-card-2.png'
	},
	{
		name : 'card2',
		img  : 'assets/images/memory-card-2.png'
	},
	{
		name : 'card3',
		img  : 'assets/images/memory-card-3.png'
	},
	{
		name : 'card3',
		img  : 'assets/images/memory-card-3.png'
	},
	{
		name : 'card4',
		img  : 'assets/images/memory-card-4.png'
	},
	{
		name : 'card4',
		img  : 'assets/images/memory-card-4.png'
	},
	{
		name : 'card5',
		img  : 'assets/images/memory-card-5.png'
	},
	{
		name : 'card5',
		img  : 'assets/images/memory-card-5.png'
	},
	{
		name : 'card6',
		img  : 'assets/images/memory-card-6.png'
	},
	{
		name : 'card6',
		img  : 'assets/images/memory-card-6.png'
	}
]
const grid = document.getElementsByClassName('grid')[0]
let cardsChosenPair = []
let cardsChosenPairId = []
let cardsWon = []
let score = document.getElementById('score')
let scoreNumber = 0

//Creating the game board

function createGameBoard(){
	for(let i=0;i<cardArray.length;i++){
		var card = document.createElement('img')
		card.setAttribute('src','assets/images/cover-img.png')
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
		allCards[firstChosenCardId].setAttribute('src','assets/images/blank-img.png')
		allCards[secondChosenCardId].setAttribute('src','assets/images/blank-img.png')
		cardsWon.push(cardsChosenPair)
		scoreNumber++
		score.innerHTML = `<h3 id="score">Score : ${scoreNumber} </h3>`
	}
	else if(firstChosenCardId === secondChosenCardId || cardArray[firstChosenCardId].img != cardArray[secondChosenCardId].img){
		alert("Oops! Try Again")
		allCards[firstChosenCardId].setAttribute('src','assets/images/cover-img.png')
		allCards[secondChosenCardId].setAttribute('src','assets/images/cover-img.png')
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
createGameBoard()

