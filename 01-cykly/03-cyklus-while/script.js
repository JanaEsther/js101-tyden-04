console.log('%c Cyklus while ', 'background:black;color:yellow;');

// cyklus while
// s dopředu neznámým počtem opakování

let i = 0;
// příkazy uvnitř cyklu se provádí
// DOKUD podmínka v závorce platí
// pozor na nekonečný cyklus!!!
while (i < 5) {
 	console.log('ahoj');
 	i++;
}


// chci vypsat výsledek vždy zdvojnásobit
// a dělat to tak dlouho, dokud je menší než 100
let vysledek = 1;
while (vysledek < 100) {
	console.log(vysledek);
	vysledek *= 2;
}


// házení kostkou
// házíme tak dlouho, dokud nepadne 6
// na začátku musíme nastavit kostku na hodnotu,
// aby platila podmínka a cyklus se provedl
// alespoň jednou

// let kostka = 0;
// while (kostka !== 6) {
// 	kostka = Math.floor(Math.random() * 6 + 1);
// 	console.log(kostka);
// }


// varianta do ... while
// s podmínkou na konci
// cyklus do...while se vždy provede ALESPOŇ JEDNOU
// protože příkazy se nejprve provedou a teprve
// potom se otestuje plastnost podmínky
let kostka;
do {
	kostka = Math.floor(Math.random() * 6 + 1);
	console.log(kostka);
} while (kostka !== 6);

