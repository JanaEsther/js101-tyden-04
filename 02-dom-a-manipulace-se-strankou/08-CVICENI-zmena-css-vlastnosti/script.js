console.log('%c Změna CSs vlastností ', 'background:black;color:yellow;');

/*
🛑 POZOR 🛑 na CSS vlastnosti, které mají v názvu pomlčku.
Převádí se na tzv. camelCase.
background-color v CSS → backgroundColor v JavaScriptu
Na velikosti písmen záleží!
*/


/*
1) Hlavní nadpis
Vyberte pomocí `document.querySelector` hlavní nadpis a upravte jeho CSS vlastnosti následovně:
- Nastavte barvu nadpisu na `dodgerblue`
- Vypněte u nadpisu tučné písmo, tj. nastavte `font-weight` na hodnotu `normal`
- Zapněte na nadpisu kurzívu, tj. `font-style` na hodnotu `italic`
*/
const hlavniNadpis = document.querySelector('.title');
hlavniNadpis.style.color = 'dodgerblue';
hlavniNadpis.style.fontWeight = 'normal';
hlavniNadpis.style.fontStyle = 'italic';


/*
2) Text pod nadpisem
Odstavci hned pod nadpisem (perex) nastavte:
- Barvu pozadí na hodnotu `#e5e5e5`
- Padding na hodnotu `1em`
- Ohraničení vlevo (border-left) na hodnotu `3px solid dodgerblue`
*/
const odstavec = document.querySelector('.perex');
odstavec.style.backgroundColor = '#e5e5e5';
odstavec.style.padding = `1em`;
odstavec.style.borderLeft = '2px solid dodgerblue';


/*
3) Obrázky
Oběma obrázkům nastavte:
- Rámeček (border) na hodnotu `2px solid dodgerblue`  pro zimní obrázek. Pro letní obrázek změňte barvu rámečku na `orange`
- Padding na hodnotu `20px`
- Bílou barvu pozadí
- Přidejte stín pomocí vlastnosti `box-shadow` s hodnotou `3px 3px 5px rgba(0, 0, 0, 0.15)`
*/
const image1 = document.querySelector('.winter-img');
image1.style.border = '2px solid dodgerblue';
image1.style.padding = '20px';
image1.style.backgroundColor = 'white';
image1.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.15)';
const image2 = document.querySelector('.summer-img');
image2.style.border = '2px solid gold';
image2.style.padding = '20px';
image2.style.backgroundColor = 'white';
image2.style.boxShadow = '3px 3px 5px rgba(0, 0, 0, 0.15)';



/*
4) Odkazy
Na stránce jsou dva odkazy - jeden vede na léto, druhý na zimu.
- Letnímu odkazu nastavte barvu pozadí na `tomato`
- Zimnímu odkazu nastavte barvu pozadí na `dodgerblue`
- Oběma odkazům nastavte barvu písma na bílou
- Oběma odkazům vypněte podtržení, nastavte `text-decoration` na hodnotu `none`
*/
const a1 = document.querySelector('#winter-link');
a1.style.backgroundColor = 'tomato';
a1.style.color = 'white';
a1.style.textDecoration = 'none';
a1.style.borderRadius = '7px';
a1.style.padding = '3px';
const a2 = document.querySelector('#summer-link');
a2.style.backgroundColor = 'dodgerblue';
a2.style.color = 'white';
a1.style.color = 'white';
a2.style.textDecoration = 'none';
a2.style.borderRadius = '7px';
a2.style.padding = '3px';


/*
5) Závěr
Pohrajte si s posledním nadpisem na stránce s textem “Závěr”:
Otočte nadpis tak, aby nebyl úplně rovně.
Nastavte vlastnost `transform` na hodnotu `rotate(-7deg)`
*/
const endNadpis = document.querySelector('#conclusion');
endNadpis.style.transform = 'rotate(-7deg)';
endNadpis.style.color = 'orangered';
endNadpis.style.marginBottom = '60px';