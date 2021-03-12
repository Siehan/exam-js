/*
guess.js
Ecrire une fonction guess qui prend 2 nombres en paramètres userGuess et secret.
Si userGuess est inférieur à secret la fonction devra afficher: Too small!
Si userGuess est supérieur à secret la fonction devra afficher: Too big!
Si userGuess est égal à secret la fonction devra afficher: You win
*/

let userGuess = 0;
let secret = 0;

const guess = (nb1, nb2) => {
  return nb1 + nb2;
};
if (nb1 < nb2) {
  console.log("Too small!");
  if (nb1 > nb2) console.log("Too big!");
} else {
  console.log("You win");
}

console.log(guess(3, 2));
