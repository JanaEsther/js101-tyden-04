console.log('%c Nastavení CSS třídy ', 'background:black;color:yellow;');



const odstavec = document.querySelector('p');

// className
// obsah nastavený v HTML v atributu class
console.log( odstavec.className );
odstavec.className = 'zvyrazneni';


// classList
// umožňuje nám přidávat a odebírat
// jednotlivé CSS třídy na prvku
// metody: add, remove, toggle

// přidává třídu
odstavec.classList.add('zvyrazneni');

// odebere třídu z prvku
odstavec.classList.remove('treti');
odstavec.classList.remove('prvni');

// přepíná třídu
// - pokud na prvku neexistuje, tak ji přidá
// - pokud na prvku existuje, tak ji odebere
odstavec.classList.toggle('zvyrazneni');
document.querySelector('p').classList.toggle('zvyrazneni')
