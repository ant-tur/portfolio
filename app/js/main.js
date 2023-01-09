const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

function closeMenu(elem) {
	elem.addEventListener('click', () => {
		menu.classList.remove('active');
	});
}

closeMenu(closeElem);
closeMenu(overlay);

const percents = document.querySelectorAll('.skills__percent-number'),
	lines = document.querySelectorAll('.skills__percent-orange');

percents.forEach( (item, i) => {
	lines[i].style.width = item.innerHTML;
});