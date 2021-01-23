let option = 'standard';
let images = ['assets/images/1.svg','assets/images/2.svg','assets/images/3.svg','assets/images/4.svg','assets/images/5.svg','assets/images/6.svg','assets/images/7.svg','assets/images/8.svg'];
let randomNumber = Math.floor(Math.random() * images.length);
let rightImage = document.getElementsByClassName('right')[0];

window.onload = ()=>{
	rightImage.innerHTML = `<img src=${images[randomNumber]} alt="" srcset="" width="675" height="500"
	class="illustration">`;
}

document.getElementById('opt1').addEventListener('click',()=>{
	let whInputs = document.getElementById('wh-inputs');
	whInputs.innerHTML = `<input type="text" id="weight" class="input-box" min="0" placeholder="Weight(lb)"
	autocomplete="off">
	<input type="text" id="height" class="input-box" min="0" placeholder="Height(in)"
	autocomplete="off">`
	option = 'standard';
	
})

document.getElementById('opt2').addEventListener('click',()=>{
	let whInputs = document.getElementById('wh-inputs');
	whInputs.innerHTML = `<input type="text" id="weight" class="input-box" min="0" placeholder="Weight(Kg)"
	autocomplete="off">
	<input type="text" id="height" class="input-box" min="0" placeholder="Height(m)"
	autocomplete="off">`;
	option = 'metric';
})



document.getElementById('form').addEventListener('submit',(event)=>{
	event.preventDefault();
	
	let weight = document.getElementById('weight').value;
	let height = document.getElementById('height').value;
	// let bmi = (weight/(height*height)).toFixed(2);
	let bmi;
	option === 'standard' ? bmi = ((weight  / height / height) * 703) : bmi = (weight/(height*height));
	bmi = bmi.toFixed(2);
	let result = document.getElementById('result');
	result.innerHTML = `<p>Your Body Mass Index is <strong>${bmi}</strong></p>`;

})