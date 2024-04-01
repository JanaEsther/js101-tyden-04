console.log('%c Funkce jako argumenty ', 'background:black;color:yellow;');


/*
Cvičení 1: Kalkulačka
Připravte si 4 jednoduché funkce, kde každá bude přijímat dva parametry `a` a `b`, nad kterými provede jednoduchou matematickou operaci a vrátí výsledek z funkce ven pomocí `return`.

- funkce `soucet` bude vracet hodnotu a + b
- funkce `rozdil` bude vracet hodnotu a - b
- funkce `nasobek` bude vracet hodnotu a * b
- funkce `deleni` bude vracet hodnotu a / b

Vytvoř novou funkci `kalkulacka`, která bude přijímat 3 parametry: `x`, `y` a `fn`.

Do funkce budeme jako argumenty předávat 2 čísla a jednu z funkcí vytvořených dříve. Funkce `kalkulacka` by měla vrátit výsledek matematické operace, jejíž funkci jsem do kalkulačky poslali jako třetí argument.

Příklad volání:
const vysledek = kalkulacka(3, 5, soucet);
console.log(vysledek); // 8

Vyzkoušejte použití funkce kalkulacka se všemi čtyřmi matematickými operacemi.
*/




/*
Cvičení 2: Testování pole hodnot
Máme připravenou funkci `jeLiche`, která vrátí hodnotu `true`, je-li do ní předané číslo liché.
Zároveň máme připravené jednoduché pole čísel.

Napište funkci `testPole`, která bude přijímat 2 parametry:
- pole, jehož prvky se mají otestovat
- funkci, která bude test nad jednotlivými prvky provádět

Uvnitř funkce projděte pomocí cyklu postupně všechny prvky v poli a pro každý prvek zavolejte předanou funkci.
Do konzole vypište vždy prvek z pole a vedle něho výsledek funkce.

Příklad volání funkce:
testPole(cisla, jeLiche)

Výsledek v konzoli:
2 false
7 true
13 true
28 false
37 true
64 false
*/

const cisla = [2, 7, 13, 28, 37, 64];

function jeLiche(cislo) {
  return cislo % 2 === 1
}



/*
BONUS:
Zkuste vytvořit jinou funkci podobnou existující funkci `jeLiche` , která bude například testovat, zda je číslo větší než 20. Zkuste tuto funkci předat jako argument do funkce `testPole`.
*/