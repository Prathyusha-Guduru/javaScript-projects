document.getElementById('form').addEventListener('submit',(event)=>{
	event.preventDefault();
	let weight = document.getElementById('weight').value;
	let height = document.getElementById('height').value;
	// console.log(`weight is ${weight},height is ${height}`);
	let bmi = (weight/(height*height)).toFixed(2);
	let result = document.getElementById('result');
	result.innerHTML = `<p>Your Body Mass Index is <strong>${bmi}</strong></p>`
})