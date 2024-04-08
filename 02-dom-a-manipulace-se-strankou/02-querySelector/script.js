console.log('%c querySelector - výběr prvku na stránce ', 'background:black;color:yellow;');

// document.querySelector
// vybere prvek na stránce pomocí CSS selectoru
// pokud výběru odpovídá více prvků,
// vrátí se nám jenom ten první

const nadpis = document.querySelector('h1');
console.log(nadpis);

// různé typy selektorů
// vybíráme podle HTML značky
const odstavec1 = document.querySelector('p');
console.log(odstavec1);

// vybíráme podle CSS třídy
const odstavec2 = document.querySelector('.odstavec');
console.log(odstavec2);

// vybíráme podle ID
const odstavec3 = document.querySelector('#text');
console.log(odstavec3);

// selektory mohou být libovolně složité
const odstavec4 = document.querySelector('section p');
console.log(odstavec4);

const odrazka = document.querySelector('li:nth-child(4)');
console.log(odrazka);

const obrazek = document.querySelector('img[alt]');
console.log(obrazek);


// querySelector uvnitř jiného prvku

const sekce = document.querySelector('section');
console.log(sekce);

// nemusíme hledat uvnitř celého dokumentu,
// ale můžeme hledat uvnitř jiného prvku

const odstavec5 = sekce.querySelector('p♦');
console.log(odstavec5);

