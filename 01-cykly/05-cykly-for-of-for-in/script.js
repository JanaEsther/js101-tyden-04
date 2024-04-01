console.log('%c Cykly for of, for in ', 'background:black;color:yellow;');

// cyklus for...of
// procházení všech prvků pole

const jmena = ['Alena', 'Jiří', 'Eva', 'Lucie', 'Marek'];

for (const jmeno of jmena) {
	console.log(jmeno);
}


// nemusí jít nutně jen o pole
// for..of umí procházet jakoukoliv hodnotu
// iterovatelného typu, např. textový řetězec
const text = 'Lorem Ipsum';
for (const pismeno of text) {
	console.log(pismeno);
}




// hezké a jednoduché je použití for..of
// pokud máme pole objektů
const osoby = [
	{ jmeno: 'Alena', vek: 24 },
	{ jmeno: 'Jiří', vek: 31 },
	{ jmeno: 'Eva', vek: 27 },
	{ jmeno: 'Lucie', vek: 38 },
	{ jmeno: 'Marek', vek: 19 },
];

// můžeme pak uvnitř cyklu pracovat
// se samostatným objektem a nemusíme se
// neustále odkazovat na prvek pole pomocí indexu
for (const osoba of osoby) {
	console.log(`${osoba.jmeno}, věk ${osoba.vek} let`);
}



// cyklus for..in
// procházení všech vlastností objektu
const auto = {
	znacka: 'Škoda',
	model: 'Octavia',
	barva: 'červená',
	motor: {
		objem: 1.9,
		pocetValcu: 4,
	},
	palivo: 'diesel',
	maxRychlost: 195,
	pocetOsob: 5,
};

// umožňuje nám projít postupně vlastnosti
// objektu, i když neznáme dopředu jejich název
for (const vlastnost in auto) {
 	console.log(vlastnost); // název vlastnosti
 	console.log(auto[vlastnost]); // její hodnota
}
