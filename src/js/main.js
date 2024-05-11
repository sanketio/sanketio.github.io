/**
 * Main JS file.
 */

import '../css/main.css';

const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const input = document.getElementById('switch');
const hand = document.querySelector('.emoji.wave-hand');
const typing = document.querySelector('.typing');

if (night) {
	input.checked = true;
	body.classList.add('night');
}

toggle.addEventListener('click', function () {
	const isChecked = input.checked;
	if (isChecked) {
		body.classList.remove('night');
	} else {
		body.classList.add('night');
	}
});

/**
 * Wave hand empji on load.
 */
const waveOnLoad = () => {
	if (!hand) {
		return;
	}

	hand.classList.add('wave');
	setTimeout(function () {
		hand.classList.remove('wave');
	}, 2000);
};

/**
 * Typing text effect.
 */
const typeTextOnLoad = () => {
	if (!typing) {
		return;
	}

	setTimeout(() => {
		typing.textContent = 'Developer';
	}, 0);

	setTimeout(() => {
		typing.textContent = 'Consultant';
	}, 4000);

	setTimeout(() => {
		typing.textContent = 'Architect';
	}, 8000);
};

if (hand) {
	setTimeout(function () {
		waveOnLoad();
	}, 1000);

	hand.addEventListener('mouseover', function () {
		hand.classList.add('wave');
	});

	hand.addEventListener('mouseout', function () {
		hand.classList.remove('wave');
	});
}

if (typing) {
	typeTextOnLoad();

	setInterval(typeTextOnLoad, 12000);
}
