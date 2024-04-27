console.log('%c Změna CSS třídy ', 'background:black;color:yellow;');

/*
🛑 POZOR 🛑
Některé prvky na sobě mají nastaveno id, některé jenom class, některé nemají nic.
Použijte vhodné CSS selektory k výběru správného prvku.
*/


/*
1) Článek
Vyberte značku `<article>` a pomocí vlastnosti `className` nastavte CSS třídu prvku na hodnotu `blogpost` .
*/
const article = document.querySelector('article')
article.className = 'blogspot';

/*
2) Hlavní nadpis
Přidejte CSS třídu `main-title` na hlavní nadpis `<h1>`. Pozor na to, že nadpis už na sobě jednu třídu má. 
Použijte vlastnost `classList` a její metodu `add`.
*/
const nadpis = document.querySelector('h1')
nadpis.classList = 'main-title';

/*
3) Perex
Přidejte CSS třídu `perex` na první odstavec pod hlavním nadpisem.
*/
const perex = document.querySelector('p');
perex.className = 'perex';

/*
4) Zimní a letní sekce
V článku jsou sekce pro zimu a léto, které mají `id` s hodnotou `winter` a `summer`. 
Přidejte CSS třídu `winter` na zimní sekci a CSS třídu `summer` na letní sekci.
*/
const winter = document.querySelector('#winter');
winter.className = 'winter';

const summmer = document.querySelector('#summer');
summmer.className = 'summer';

/*
5) Seznamy
V článku jsou tři odrážkové seznamy. Vyberte postupně všechny tři seznamy a přidejte na každý CSS třídu `list`.
*/
const ul = document.querySelectorAll('ul');
ul.forEach(function(list) {
  list.classList.add('list');
});



/*
6) Bláznivé sekce na konci článku
Na konci článku je sekce s tipy. Na značce `<section>` jsou přidané dvě CSS třídy: `tips` a `crazy-tips`. Odeberte z prvku třídu `crazy tips` a nechte na něm pouze třídu `tips` .
Proveďte to stejné u sekce se závěrem článku a odeberte z něj “crazy” třídu.
*/
const section1 = document.querySelector('.tips');
section1.classList.remove('crazy-tips');
const section2 = document.querySelector('.conclusion');
section2.classList.remove('crazy-conclusion');

