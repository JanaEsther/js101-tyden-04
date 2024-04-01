console.log('%c Anonymní funkce ', 'background:black;color:yellow;');


// const double = (x) => {
//   console.log( 2 * x );
// }

// const cislo = 5;

// double(cislo);
// double(5);



// Anonymní funkce

const czk = (cena) => {
  return `${cena} Kč`;
}

const zbozi = (nazev, cena, formatMeny) => {
  return `
Zboží: ${nazev}
Cena:  ${ formatMeny(cena) }`;
}

console.log(
  zbozi(
    'Pračka P01',
    9600,
    czk
  )
);
console.log(
  zbozi(
    'Pračka P01',
    9600,
    (cena) => {
      return `${cena} Kč`;
    }
  )
);

