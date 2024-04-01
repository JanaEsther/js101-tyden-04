console.log('%c Stisk klávesy ', 'background:black;color:yellow;');


// Události klávesnice
// keydown
// keyup

const pismeno = document.querySelector('.pismeno');
const kod = document.querySelector('.kod');

document.addEventListener('keydown', (event) => {
	pismeno.textContent = event.key;
	kod.textContent = event.code;
});



// vlastnosti event objectu:
// key  'a'    → napsané písmeno
// code 'KeyA' → kód fyzické klávesy



const text = document.querySelector('.text');

document.addEventListener('keydown', (event) => {
	if (event.key === '-') {
		text.style.display = 'none';
	} else if (event.key === '+') {
		text.style.display = 'block';
	}
});