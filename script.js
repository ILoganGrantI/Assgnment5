let diameter = 0
let area = 0
let circumference = 0
let radius = 0
let result = 0
let answer = 0

document.getElementById('button').addEventListener('click', funk)

function funk () {
	diameter = document.getElementById('D').value
	diameter = parseInt(diameter)
  circumference = diameter * Math.PI
	document.getElementById('C-1').innerHTML = circumference
  radius = diameter / 2
  result = radius * radius
  answer = Math.PI * result
	document.getElementById('A-1').innerHTML = answer

}
