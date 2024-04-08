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



/*
3) Obrázky
Oběma obrázkům nastavte:
- Rámeček (border) na hodnotu `2px solid dodgerblue`  pro zimní obrázek. Pro letní obrázek změňte barvu rámečku na `orange`
- Padding na hodnotu `20px`
- Bílou barvu pozadí
- Přidejte stín pomocí vlastnosti `box-shadow` s hodnotou `3px 3px 5px rgba(0, 0, 0, 0.15)`
*/




/*
4) Odkazy
Na stránce jsou dva odkazy - jeden vede na léto, druhý na zimu.
- Letnímu odkazu nastavte barvu pozadí na `tomato`
- Zimnímu odkazu nastavte barvu pozadí na `dodgerblue`
- Oběma odkazům nastavte barvu písma na bílou
- Oběma odkazům vypněte podtržení, nastavte `text-decoration` na hodnotu `none`
*/




/*
5) Závěr
Pohrajte si s posledním nadpisem na stránce s textem “Závěr”:
Otočte nadpis tak, aby nebyl úplně rovně.
Nastavte vlastnost `transform` na hodnotu `rotate(-7deg)`
*/
