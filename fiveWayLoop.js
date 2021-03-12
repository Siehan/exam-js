/*
fiveWayLoop.js

Même exercice que précédemment mais ajouter deux boucles do-while et while pour effectuer le traitement.
*/

let tab = ["Alice", "Bob", "Charlie", "Dan", "Eve"];

let i = 0;

while (i < tab.length) {
  //console.log(tab[i++]);
  console.log(`${tab[i]}, length: ${tab[i].length}`);
  ++i;
}

do {
  console.log(`${tab[i]}, length: ${tab[i].length}`);
  ++i;
} while (i < tab.length);

for (let i = 0; i < tab.length; i++) {
  //console.log(tab[i]);
  console.log(`${tab[i]}, length: ${tab[i].length}`);
  //console.log(tab[i].length);
}

for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`);
}

tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`);
});

/* OUTPUT:
Alice, length: 5
Bob, length: 3
Charlie, length: 7
Dan, length: 3
Eve, length: 3
*/
