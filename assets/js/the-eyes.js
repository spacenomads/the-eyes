'use strict';
const eye = document.querySelectorAll('.js__eye');
const eyeball = document.querySelector('.js__eyeball');
const timerMS = 1200;


function getXtoCenter() {
	const eyeBox = eye[0].getBoundingClientRect();
	const eyeXCenter = eyeBox.x + eyeBox.width / 2;
	const windowXCenter = window.innerWidth / 2;
	const xOffset = windowXCenter - eyeXCenter;
	return xOffset * 100 / window.innerWidth;
}

function getYtoCenter() {
	const eyeBox = eye[0].getBoundingClientRect();
	const eyeYCenter = eyeBox.y + eyeBox.height / 2;
	const windowYCenter = window.innerHeight / 2;
	const yOffset = windowYCenter - eyeYCenter;
	return yOffset * 100 / window.innerHeight;
}

function lookAtTheCursor() {
	const xFix = getXtoCenter();
	const yFix = getYtoCenter();



	let x = (event.clientX * 100 / window.innerWidth) + xFix;
	if (x >= 70.5) {x= 70.5;}
	let y = (event.clientY * 100 / window.innerHeight) + yFix;
	if (y >= 86.6) {y= 86.6;}

	eyeball.style.transform = `translate(${x}%, ${y}%)`;
}

function blinkTheEye() {
	eye[0].classList.add('the-eyes__eye--blinking');
	eye[1].classList.add('the-eyes__eye--blinking');
	setTimeout(() => {
		eye[0].classList.remove('the-eyes__eye--blinking');
		eye[1].classList.remove('the-eyes__eye--blinking');
		blinking = setTimeout(blinkTheEye, 3000);
	}, timerMS);

}

document.addEventListener('mousemove', lookAtTheCursor);
let blinking = setTimeout(blinkTheEye, 3000);
