'use strict';
const eye = document.querySelector('.js__eye');
const eyeball = document.querySelector('.js__eyeball');
const timerMS = 1200;


function getXtoCenter() {
	const eyeBox = eye.getBoundingClientRect();
	const eyeXCenter = eyeBox.x + eyeBox.width / 2;
	const windowXCenter = window.innerWidth / 2;
	const xOffset = windowXCenter - eyeXCenter;
	return xOffset * 100 / window.innerWidth;
}

function getYtoCenter() {
	const eyeBox = eye.getBoundingClientRect();
	const eyeYCenter = eyeBox.y + eyeBox.height / 2;
	const windowYCenter = window.innerHeight / 2;
	const yOffset = windowYCenter - eyeYCenter;
	return yOffset * 100 / window.innerHeight;
}

function lookAtTheCursor() {
	const xFix = getXtoCenter();
	const yFix = getYtoCenter();

	const x = (event.clientX * 100 / window.innerWidth) + xFix + '%';
	const y = (event.clientY * 100 / window.innerHeight) + yFix + '%';


	eyeball.style.left = x;
	eyeball.style.top = y;
	eyeball.style.transform = `translate(-${x}, -${y})`;
}

function blinkTheEye() {
	eye.classList.add('the-eyes__eye--blinking');
	setTimeout(() => {
		eye.classList.remove('the-eyes__eye--blinking');
		blinking = setTimeout(blinkTheEye, 3000);
	}, timerMS);

}

document.addEventListener('mousemove', lookAtTheCursor);
let blinking = setTimeout(blinkTheEye, 3000);
