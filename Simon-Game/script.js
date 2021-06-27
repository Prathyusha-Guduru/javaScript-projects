boxes = ['box-0','box-1','box-2','box-3']

function nextSequence(){
	randomNumber =  Math.floor(Math.random() * (4 - 0) + 0);
	gamePattern = []
	randomChoosenBox = boxes[randomNumber]
	gamePattern.push(randomChoosenBox)
}

console.log(gamePattern);