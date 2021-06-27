boxes = ['box-0','box-1','box-2','box-3']
sounds = ['sound-1','sound-2','sound-3','sound-0']
gamePattern = []
userClickedPattern = []

function nextSequence(){
	randomNumber =  Math.floor(Math.random() * (4 - 0) + 0);
	randomChoosenBox = boxes[randomNumber]
	gamePattern.push(randomChoosenBox)
}

function playSound(boxNum){
	let music = document.createElement("audio")
	music.src = "/Simon-Game/sounds/" + sounds[boxNum] + ".mp3"
	music.play()
}


$('.box').click(function(){
	boxId = $(this).attr('id')
	boxNum = boxId.slice(-1)
	playSound(boxNum)
	$(this).fadeOut(100).fadeIn(100)
	userClickedPattern.push(boxNum)
	console.log(userClickedPattern);
})






