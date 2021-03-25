/*
average.js
Ecrire une fonction average qui prend comme paramètre
un tableau de number et retourne la moyenne de tous les nombres de ce tableau.
*/

// Addition des chiffres divisés par leur nombre (7)
const nbArray = [20, 19, 170, 10, 5, 10, 23];

function average(nbArray) {
  return nbArray.reduce((a, b) => a + b, 0) / nbArray.length;
}

console.log(average(nbArray).toFixed(2)); // .toFixed pour arrondir à 2 chiffres après la virgule
// OUTPUT : 36.71 (au lieu de 36.714285714285715)
