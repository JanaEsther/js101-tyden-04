console.log('%c Změna hodnoty atributu ', 'background:black;color:yellow;');

const obrazek = document.querySelector('img');

obrazek.src = 'images/pes.jpg';
obrazek.alt = 'Roztomilé štěňátko';


const odkaz = document.querySelector('a');
odkaz.href = 'https://www.seznam.cz';
odkaz.title = 'Toto vede na Seznam';