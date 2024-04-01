console.log('%c Události ', 'background:black;color:yellow;');

// event handler
const priKliknuti = () => {
	const text = document.querySelector('.text');
	text.style.color = 'red';
	text.style.fontFamily = 'cursive';
}

// event listener
// addEventListener('událost', funkce)
const tlacitko = document.querySelector('#tlacitko');
tlacitko.addEventListener('click', priKliknuti);



const skrytVtip = () => {
	const vtip = document.querySelector('.vtip');
	vtip.style.display = 'none';
}

const zobrazitVtip = () => {
	const vtip = document.querySelector('.vtip');
	vtip.style.display = 'block';
}

const skryt = document.querySelector('#skryt');
const zobrazit = document.querySelector('#zobrazit');

skryt.addEventListener('click', skrytVtip);
zobrazit.addEventListener('click', zobrazitVtip);


const box = document.querySelector('.box');
box.addEventListener('click', () => {
	box.classList.toggle('aktivni');
} );



// typy událostí
// click, mouseover, mouseout, atd.
// https://www.w3schools.com/jsref/dom_obj_event.asp

const foto = document.querySelector('.foto');

foto.addEventListener('mouseover', () => {
	foto.src = 'images/pes.jpg';
});

foto.addEventListener('mouseout', () => {
	foto.src = 'images/kocka.jpg';
});
