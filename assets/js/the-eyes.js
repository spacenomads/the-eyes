'use strict';

var balls = document.querySelectorAll('.js__eye');

document.onmousemove = function() {
	var x = event.clientX * 100 / window.innerWidth + '%';
	var y = event.clientY * 100 / window.innerHeight + '%';

	for (var i=0;i<balls.length;i++) {
		balls[i].style.left = x;
		balls[i].style.top = y;
		balls[i].style.transform = `translate(-${x}, -${y})`;
	}
};
