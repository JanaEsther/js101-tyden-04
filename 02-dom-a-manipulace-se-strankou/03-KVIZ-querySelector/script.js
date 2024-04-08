console.log('%c querySelector kvíz ', 'background:black;color:yellow;');

// Otázka 3:
// Pomocí document.querySelector() na stránce postupně
// vyberte následující prvky (viz a - f).
// Vypište vybrané prvky do konzole, abyste si ověřili,
// že jste je vybrali správně.


// a) Hlavní nadpis h1
nadpis = document.querySelector('h1');
console.log(nadpis);
// b) Prvek s třídou "zajimavosti"
const zajimavosti = document.querySelector('.zajimavosti');
console.log(zajimavosti);

// c) Prvek s id="glacier-point"
const glacierPoint = document.querySelector('#glacier-point');
console.log(glacierPoint);

// d) Obrázek v sekci "intro"
const image = document.querySelector('.intro img')
console.log(image);
// e) Nadpis h3 v druhé odrážce v sekci "zajimavosti"
const nadpis3 = document.querySelector('.zajimavosti li:nth-child(2) h3')
console.log(image);
// f) Odstavec, který následuje hned po nadpisu h2 v sekci "dalsi-informace"

const odstavec = document.querySelector('.dalsi-informace h2+p')
console.log('odstavec');
