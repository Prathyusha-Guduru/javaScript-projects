document.getElementById()







document.getElementById('form').addEventListener('submit',(event)=>{
	event.preventDefault();
	let weight = document.getElementById('weight').value;
	let height = document.getElementById('height').value;
	let bmi = (weight/(height*height)).toFixed(2);
	let result = document.getElementById('result');
	result.innerHTML = `<p>Your Body Mass Index is <strong>${bmi}</strong></p>`;

})