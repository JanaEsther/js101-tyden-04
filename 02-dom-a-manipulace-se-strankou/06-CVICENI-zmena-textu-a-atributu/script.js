console.log('%c Změna textového obsahu a atributů ', 'background:black;color:yellow;');

/*
1) Hlavní nadpis
Změňte text hlavního nadpisu `<h1>` na:
Zimní a letní radovánky: Kontrastní potěšení
*/
const nadpis = document.querySelector('h1');
nadpis.textContent = 'Zimní a letní radovánky: Kontrastní potěšení.';

/*
2) Text pod nadpisem
Změňte text odstavce hned pod hlavním nadpisem na:

<em><strong>Zima a léto</strong>, dvě protikladná roční období.
Každé nabízí svůj osobitý soubor radovánek, které zpestřují náš
život a přinášejí <strong>jedinečné zážitky</strong>.</em>*/
const odstavec = document.querySelector('.perex')
odstavec.innerHTML = '<em><strong>Zima a léto</strong>, dvě protikladná roční období.Každé nabízí svůj osobitý soubor radovánek, které zpestřují nášživot a přinášejí <strong>jedinečné zážitky.</strong>'

/*Text do odstavce vložte jako HTML kód, protože obsah odstavce má
být celý kurzívou a první a poslední dvě slova mají být tučně tučně.
*/ 


/*
3) Obrázky
Nahraďte JavaScriptem zimní a letní obrázek za `winter.jpg` a `summer.jpg`
ze složky `images` a nastav atributy `alt` na “Zimní radovánky” a “Letní radovánky”
*/
const obrazek1 = document.querySelector('.winter-img');
obrazek1.src = 'images/winter.jpg';
obrazek1.alt = "Zimní radovánky";

const obrazek2 = document.querySelector('.summer-img');
obrazek2.src = 'images/summer.jpg';
obrazek2.alt = "Letní radovánky";

/*
4) Odkazy
V sekci Tipy jsou v prvních dvou odrážkách odkazy, které zatím nikam nevedou.
Nastavte cíl odkazu (atribut `href`) pro léto na:
https://cs.wikipedia.org/wiki/Léto

Nastavte cíl odkazu pro zimu na:
https://cs.wikipedia.org/wiki/Zima
*/

const odkaz1 = document.querySelector('#winter-link');
odkaz1.href = 'https://cs.wikipedia.org/wiki/Zima';

const odkaz2 = document.querySelector('#summer-link');
odkaz2.href = 'https://cs.wikipedia.org/wiki/Léto';

