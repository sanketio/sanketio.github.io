import '../css/main.css';

const d = new Date();
const hours = d.getHours();
const night = hours >= 19 || hours <= 7; // between 7pm and 7am
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const input = document.getElementById('switch');

if (night) {
	input.checked = true;
	body.classList.add('night');
}

toggle.addEventListener('click', function() {
	const isChecked = input.checked;
	if (isChecked) {
		body.classList.remove('night');
	} else {
		body.classList.add('night');
	}
});

const hand = document.querySelector('.emoji.wave-hand');

function waveOnLoad() {
	hand.classList.add('wave');
	setTimeout(function() {
		hand.classList.remove('wave');
	}, 2000);
}

setTimeout(function() {
	waveOnLoad();
}, 1000);

hand.addEventListener('mouseover', function() {
	hand.classList.add('wave');
});

hand.addEventListener('mouseout', function() {
	hand.classList.remove('wave');
});
