'use strict';
const eye = document.querySelector('.js__eye');
const eyeball = document.querySelector('.js__eyeball');
const timerMS = 1200;


function lookAtTheCursor() {
	const x = event.clientX * 100 / window.innerWidth + '%';
	const y = event.clientY * 100 / window.innerHeight + '%';

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
