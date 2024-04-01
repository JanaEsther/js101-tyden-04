console.log('%c Stisk klávesy ', 'background:black;color:yellow;');


/*
Cvičení 1: Otáčení karet
Na připravené stránce jsou tři prvky s id `kartaA`, `kartaB` a `kartaC`.  Když na tento div přidáte připravenou CSS třídu `otoceno`, karta se otočí obrázkem nahoru. Když třídu odeberete, karta se otočí zpět zadní stranou nahoru.

Přidejte do stránky posluchač události, který bude reagovat na stisk klávesy (událost `keydown`). Nezapomeňte, že tentokrát nepřidáváte událost na konkrétní prvek na stránce, ale na objekt `document`, který představuje celou stránku.

Funkce, která se spustí při stisku klávesy musí jako parametr přijmout *event object*, ze kterého lze zjistit, jaká klávesa byla stisknuta.

- při stisku klávesy A otočte první kartu - tj. přidejte na ni CSS třídu `karta--otocena`
- pokud stisknete klávesu A znovu, měla by se karta otočit zpět, tj. měla by se z ní odebrat CSS třída `otoceno`
- použijte metodu `classList.toggle()`, která třídu na prvek přidá nebo ho z ní odebere, podle toho, zda na prvku už je nebo není. Pak nemusíte řešit, v jakém stavu karta momentálně je a při každém stisku klávesy zavoláte jen `kartaA.classlist.toggle(’otoceno’)`.
- udělejte to stejné pro ostatní karty - stisk klávesy B bude otáčet kartu B, stisk klávesy C bude otáčet klávesu C
- nezapomeňte, že funkce reagující na událost stisku klávesy je jenom jedna. Uvnitř musíte podle hodnoty stisknuté klávesy v *event objectu* rozhodnout, jakou akci provedete.
*/

