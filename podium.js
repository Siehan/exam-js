/*
podium.js
Ecrire une fonction podium qui prend comme paramètre un tableau de number et affiche
les 3 meilleures notes tel que ci-dessous:

let tab [20, 18, 14]

1st: 20
2nd: 18
3rd: 14
*/

let bestNote = [22, 15, 2, 19, 3, 100, 42];

const podium = bestNote.sort((a, b) => {
  return b - a;
});

console.log(`1st best note: ${bestNote[0]}`),
  console.log(`2nd best note: ${bestNote[1]}`),
  console.log(`3rd best note: ${bestNote[2]}`);

/*
OUTPUT :
1st best note: 100
2nd best note: 42
3rd best note: 22
*/
