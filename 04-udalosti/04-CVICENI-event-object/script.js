console.log('%c Cvičení: Event object ', 'background:black;color:yellow;');

/*
Cvičení 1: Špendlík 📌
V HTML k tomuto cvičení je připravený obrázek špendlíku.

Přidejte událost `click` na značku `<body>`. Funkce, které bude reagovat na kliknutí by měla jako parametr přijímat *event object*.

Event object obsahuje vlastnosti `pageX` a `pageY`, které obsahují souřadnice, kde na stránce ke kliknutí došlo. Při každém klikání nastavte špendlíku tyto souřadnice do CSS vlastností `left` a `top`, čímž přemístíte špendlík na stránce na místo kliknutí.

Nezapomeňte, že hodnoty CSS vlastností `left` a `top` musíte nastavit jako textové řetězce včetně jednotky `px`.

Vyzkoušejte klikáním na stránku zapichování špendlíku.

Špendlík se zapichuje trochu mimo místo, kam klikáte. Je to proto, že hrot špendlíku není v levém horním rohu obrázku. Experimentujte a upravte souřadnice z event objektu o několik pixelů tak, aby se špendlík zabodl přesně na místo kliknutí.
*/




/*
Cvičení 2: Souřadnice
Na stránce je připraven šedý čtverec s `id="ctverec"`.
Přidejte na tento čtverec událost `mousemove`, která nastává pokaždé, když se kurzor myši pohybuje nad prvkem.

Funkce, která bude událost obsluhovat by měla přijímat *event object*. V event objectu jsou vlastnosti `offsetX` a `offsetY`, které obsahují pixelové souřadnice v rámci objektu, na kterém k události dochází. Tj. souřadnice budou `0, 0`, když bude kurzor v levém horním rohu čtverce. Když bude kurzor v pravém dolním rohu čtverce, budou souřadnice `299, 299`, protože náš čtverec je 300px široký a vysoký.

Při každém pohybu myši hodnoty těchto souřadnic zapište do stránky do prvků s `id="souradniceX"`  a `id="souradniceY"`. Hodnoty zaokrouhlete na celé číslo.

Přidejte na čtverec ještě událost `mouseout` (odjetí kurzoru z prvku ven), ve které nastavíte text obou souřadnic na stránce na prázdný řetězec. Jinak by nám při odjetí myši ze čtverce zůstaly na stránce hodnoty, kde byl kurzor ve čtverci naposledy.
*/

