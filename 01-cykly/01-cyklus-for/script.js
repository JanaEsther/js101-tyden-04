console.log('%c Cyklus for ', 'background:black;color:yellow;');

// cyklus for
// známý počet opakování

// opakujeme 5x
for ( let i = 0 ; i < 5 ; i++ ) {
	console.log('ahoj');
}

// opakujeme 5x, ale itarátor zvětšujeme o 2
for ( let i = 0 ; i < 10 ; i += 2 ) {
 	console.log(i);
}

// opakujeme 5x, ale itarátor ymenšujeme od 5 do 1
for ( let i = 5 ; i > 0 ; i-- ) {
	console.log(i);
}


// procházení pole
const jmena = ['Alena', 'Jiří', 'Ema', 'Jana', 'Petr', 'Dana', 'Pavel'];

// iterátor používáme jako index
// od 0 do délky pole
for (let i = 0; i < jmena.length; i++) {
	console.log(`${i+1}. ${jmena[i]}` );
}



// procházení pole objektů
const osoby = [
	{ jmeno: 'Alena', vek: 18 },
	{ jmeno: 'Jiří', vek: 49 },
	{ jmeno: 'Ema', vek: 36 },
	{ jmeno: 'Jana', vek: 27 },
	{ jmeno: 'Petr', vek: 31 },
];

// pole můžeme procházet z různých důvodů
// např. potřebujeme projít postupně všechny prvky pole
// a zjistit nejstarsi osobu
let nejstarsi = -1;
let osoba;

for (let i = 0; i < osoby.length; i++) {

	if (osoby[i].vek > nejstarsi) {
		nejstarsi = osoby[i].vek;
		osoba = osoby[i];
	}

}

console.log(`Nejstarší je ${osoba.jmeno}, ${osoba.vek} let`);

