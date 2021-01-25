

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



const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenId = []
console.log(grid);

function createBoard(){
	for(let i=0;i<cardArray.length;i++){
		var card = document.createElement('img')
		card.setAttribute('src','assets/images/cover-img.png')
		card.setAttribute('id',i)
		card.addEventListener('click',flipCard)
		grid.appendChild(card)
	}
}

//Check for matches

//Flip the card
function flipCard()
{
	var cardId = this.getAttribute('id')
	cardsChosen.push(cardArray[cardId].name)
	cardsChosenId.push(cardId)
	this.setAttribute('src',cardArray[cardId].img)
}

createBoard()



