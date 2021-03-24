let diameter = 0
let area = 0
let circumference = 0

document.getElementById('button').addEventListener('click', funk)

function funk () {
	diameter = document.getElementById('D').Value
	diameter = parseInt('D')
  circumference = diameter * Math.PI
	document.getElementById('C-1').innerHTML = circumference
}
