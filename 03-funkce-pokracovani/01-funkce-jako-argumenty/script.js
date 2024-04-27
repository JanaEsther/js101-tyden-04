console.log('%c Funkce jako argumenty ', 'background:black;color:yellow;');


// funkce je hodnota jako jakákoliv jiná
// můžeme ji posílat do jiných funkcí jako argument


const czk = (cena) => {
  return `${cena} Kč`;
}

const eur = (cena) => {
  return `${cena} € `;
}

const usd = (cena) => {
  return `${cena} $`;
}


const zbozi = (nazev, cena, formatMeny) => {
  return `
Zboží: ${nazev}
Cena:  ${ formatMeny(cena)}`;
}


console.log(zbozi('Pračka P01', 9600, czk));// nevoláme funkce, je zde pouze název - proměnnou, která funkci obsahuje
//czk() - je vvýsledek volání funkce
console.log(  zbozi('Myčka M150', 670, eur)  );
console.log(  zbozi('Žehlička HOT9000', 230, usd));
console.log(  zbozi('Lednička COLD5000', 750, usd));


/*funkce vyššího řádu -  přijímá jinou funkci jako parametr nebo jinou funkci vrací jako
svůj výsledek.*/
/*můžeme vzít funkci, předat ji jako argument do jiné funkce, kde ji můžeme použít.*/ 

console.log(  czk(500) );
console.log(  eur(500) );
console.log(  usd(500) );


/*
500 Kč
€ 500
$500
*/