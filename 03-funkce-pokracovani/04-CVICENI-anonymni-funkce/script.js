console.log('%c Anonymní funkce ', 'background:black;color:yellow;');


/*
Cvičení 1: Arrow function jednohubky 🏹
Ve funkcích zapsaných jako  *arrow function* můžeme za určitých situací vynechávat složené a kulaté závorky nebo slovo return.

V kódu níže je připravených několik funkcí.
Přepište všechny funkce do podoby *arrow function* a snažte se vždy použít ten nejkratší možný zápis.

Po přepsání vyzkoušejte, zda všechny funkce správně fungují.
*/

/*function soucet(a, b) {
  return a + b;
}*/

const soucet = (a, b) => a + b; 


/*function naVelkaPismena(text) {
  return text.toUpperCase();
}*/

const naVelkaPismena = (text) => text.toUpperCase();
console.log(naVelkaPismena("velikonoce"));


/*function predstavSe(jmeno, vek) {
  console.log(`Ahoj, jmenuji se ${jmeno} a je mi ${vek} let.`);*/


const predstavSe = (jmeno, vek) => `Ahoj, jmenuji se ${jmeno} a je mi ${vek} let.`;
console.log(predstavSe("Jana", 50))

/*function hodnoceni(body) {
  if (body >= 90) {
    return 'A'
  } else if (body >= 80) {
    return 'B'
  } else if (body >= 70 ) {
    return 'C'
  } else if (body >= 60 ) {
    return 'D'
  } else if (body >= 50) {
    return 'E'
  } else {
    return 'F'
  }
}*/

const hodnoceni = (body) => {
  if (body >= 90) {
    return 'A';
  } else if (body >= 80) {
    return 'B';
  } else if (body >= 70) {
    return 'C';
  } else if (body >= 60) {
    return 'D';
  } else if (body >= 50) {
    return 'E';
  } else {
    return 'F';
  }
}


/*function cas(vteriny) {
  const h = Math.floor(vteriny / 3600);
  const m = Math.floor((vteriny % 3600) / 60);
  const s = vteriny - (h * 3600) - (m * 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}*/

const cas = (vteriny) => {
  const h = Math.floor(vteriny / 3600);
  const m = Math.floor((vteriny % 3600) / 60);
  const s = vteriny - (h * 3600) - (m * 60);
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
} 



// pouziti funkci
console.log( soucet(2, 5) );  // 7
console.log( naVelkaPismena('jaHoDa')); // JAHODA
predstavSe('Alena', 27); // Ahoj, jmenuji se Alena a je mi 27 let.
console.log( hodnoceni(74) ); // C
console.log( cas(4723) ); // 01:18:43




/*
Cvičení 2: Anonymní funkce
Máte připravený následující kód, který možná poznáváte z předchozích cvičení. 
Na označené místo dopište anonymní funkci, která bude přijímat jeden číselný parametr a jako výsledek vrátí jeho trojnásobek.
Funkci zapište jako **anonymní** přímo do volání funkce `kalkulacka`, **nevytvářejte** novou pojmenovanou funkci `trojnasobek`.
*/

function dvojnasobek(x) {
  return x * 2;
}

function trojnasobek(x) {
  return x * 3;
}

function kalkulacka(cislo, fn) {
  console.log(fn(cislo));
}

// volani funkce
kalkulacka(2, dvojnasobek);
kalkulacka(2, trojnasobek);

