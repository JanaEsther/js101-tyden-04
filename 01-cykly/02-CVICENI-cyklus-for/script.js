console.log('%c Cvičení: Cyklus for ', 'background:black;color:yellow;');

/*
Cvičení 1: Řady čísel
Použijte cyklus `for` a vypište do konzole postupně řady čísel (nový cyklus pro každou řadu, ne vše v jednom 🙂)*/

//- řada čísel od 1 do 10
for (let i = 1; i <= 10; i++){
	console.log(i);
}

//- řada čísel od 13 do 21
for ( let i = 13; i <= 21; i++){
	console.log(i);
}

//- sestupná řada čísel od 10 do 5
for ( let i = 10; i >= 5; i--){
	console.log();
}

//- řada sudých čísel od 0 do 30 (tj. 0, 2, 4, 6 …)
for ( let i = 0; i <= 30; i+=2){
	console.log(i);
}

/*
Cvičení 2: Součet první stovky
Napište cyklus `for`, který projde čísla od 1 do 100 a spočítá jejich součet.¨
Výsledek vypíše do konzole nebo do stránky.
*/
let soucet = 0;
for ( let i = 1; i <= 100; i++){
	soucet += i;
}
console.log(soucet);



/*
Cvičení 3: Lichotník
Napište funkci `opakovat`, která bude jako parametry přijímat `text` a `pocet`. Funkce uvnitř použije cyklus `for` a daný text vypíše počet-krát do konzole.
Každý rád slyší svoje jméno, lichotí nám to. Mimo funkci `opakovat` se pomocí `prompt` zeptejte uživatele na jeho jméno a počet opakování. Oba údaje předejte do funkce.
Tj. když zadáme `Alena` a `5`, tak se do konzole 5x vypíše `Alena`.
*/
let jmeno = prompt("Zadej své jméno:")
let	pocet = prompt("Zadej počet opakování:")

const opakovat = (jmeno, pocet)=>{
	for (let i = 0; i < pocet; i++){
		console.log(jmeno)
	}
 }
opakovat(jmeno, pocet);


/*
Cvičení 4: Faktoriál
Promiňte jestli vás děsím matematickým termínem, ale nebojte, použijeme pouze matematiku z prvního stupně základní školy.
Napište funkci `faktorial`, která jako parametr bude přijímat číslo `n` a jako návratovou hodnotu bude vracet faktoriál čísla `n`.
Faktoriál spočítáte vždy následovně:

// pro n = 3 je výsledek 6
1 * 2 * 3

// pro n = 7, výsledek 5040
1 * 2 * 3 * 4 * 5 * 6 * 7

Ve funkci použijte cyklus `for` a postupně vynásobte čísla 1 až `n`. Výsledek vraťte z funkce jako návratovou hodnotu a tu potom vypište do konzole nebo do stránky.

**Bonus:**
- Matematika je divná. Faktoriál nuly je `1`. Dopište do funkce speciální podmínku, která vrátí hodnotu 1, když je `n` nula.
*/

function factorial(n) {
	if (n === 0) {
		return 1;
	}
	let result = 1; 
	for (let i = 1; i <= n; i++){
		result *= i;

	}
	return result
}

console.log(factorial(3));
console.log(factorial(7));
console.log(factorial(0));




/*
Cvičení 5: Barvy
Máte připravené následující pole barev:
const barvy = ['červená', 'zelená', 'modrá', 'oranžová', 'fialová'];

Použijte cyklus `for` a vypište postupně všechny barvy do konzole. U modré barvy napište navíc ještě `'modrá je nejkrásnější barva'`.
*/
const barvy = ['červená', 'zelená', 'modrá', 'oranžová', 'fialová'];

for (let i = 0; i < barvy.length; i++){
	console.log(`${barvy[i]}`);

}
if (barvy[2] == 'modrá'){
	console.log(`${barvy[2]} je nejkrásnější barva`)

}
/*
Cvičení 6: Maximum
Máte následující pole čísel:
const cisla = [23, 67, 89, 45, 12, 34, 92, 75, 56, 18];

Pomocí cyklu `for` čísla projděte a nalezněte to největší z nich. Na konci ho vypište do konzole nebo do stránky.
*/
const cisla = [23, 67, 89, 45, 12, 34, 92, 75, 56, 18];
let nejvetsi = -1;
let cislo;

for (let i = 0; i < cisla.length; i++) {

	if (cisla[i]  > nejvetsi) {
		nejvetsi = cisla[i];
		cislo = cisla[i];
	}

}
console.log(cislo);


/*
Cvičení 7: Květiny
Máte připravené následující pole s názvy květin:

Projděte pole květin a zjistěte, která květina má nejkratší název a která nejdelší. Názvy obou květin potom vypište do konzole nebo do stránky.
*/

const kvetiny = [
	'Růže',
	'Tulipán',
	'Konvalinka',
	'Mák',
	'Pampeliška',
	'Maceška',
	'Sedmikráska',
	'Hyacint',
	'Kosatec',
	'Levandule'
];

let nejkratsiIndex = 0;
let nejdelsiIndex = 0;

for (let i = 1; i < kvetiny.length; i++){
	if (kvetiny[1].length < kvetiny[nejkratsiIndex].length) {
		nejkratsiIndex = i;
	} else if (kvetiny[1].length > kvetiny[nejdelsiIndex].length) {
		nejdelsiIndex = i;
	}
}

console.log(kvetiny[nejkratsiIndex] + ', délka:' + kvetiny[nejkratsiIndex].length + ', index: ' + nejkratsiIndex);
console.log(kvetiny[nejdelsiIndex] + ', délka:' + kvetiny[nejdelsiIndex].length + ', index:' + nejdelsiIndex);




