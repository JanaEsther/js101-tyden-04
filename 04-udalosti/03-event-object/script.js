console.log('%c Event object ', 'background:black;color:yellow;');

// event object
// musíme ho ve funkci přijmout jako parametr
// pak s ním můžeme pracovat
const priKliknuti = (event) => {
	console.log(event);
}

const tlacitko = document.querySelector('#tlacitko');
tlacitko.addEventListener('click', priKliknuti);





const box = document.querySelector('.box');
const napoveda = document.querySelector('.napoveda');

// při najetí myší na box zobrazíme nápovědu
box.addEventListener('mouseover', () => {
	napoveda.style.display = 'block';
});

// při odjetí myši nápovědu skryjeme
box.addEventListener('mouseout', () => {
	napoveda.style.display = 'none';
});

// při pohybu myši nad boxem
// si z event objectu zjistíme souřadnice
// na stránce a nastavíme na ně pozici
// bublinky s nápovědou (posuneme o 10px)
box.addEventListener('mousemove', (event) => {
	napoveda.style.left = `${event.pageX + 10}px`;
	napoveda.style.top = `${event.pageY + 10}px`;
});
