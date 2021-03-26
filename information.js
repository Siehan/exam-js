/*
information.js

Lisez cet exercice entièrement avant de commencer. Ecrire une fonction "information" qui prend 3 paramètres:

-un prénom qui sera une string
-un nom qui sera une string
-un âge qui sera un number

Cette fonction devra afficher le message suivant en fonction des paramètres:

information('Sofiane', 'Akermoun', 39)
affichera:
prenom: Sofiane
nom: Akermoun
age: 39
vous êtes majeur depuis 21 ans

information('Alice', 'Liddell', 7)
affichera:
prenom: Alice
nom: Liddell
age: 7
vous serez majeur dans 11 ans

Pour notre exercice l'âge de la majorité est 18 ans et ne vous souciez pas de la gestion du singulier/pluriel dans votre affichage.
*/

let firstName = "";
let lastName = "";
let age = 0;

const information = (firstName, lastName, age) => {
  if (age >= 18) {
    console.log(`${firstName} ${lastName}, you are major since ${age - 18} years`);
  } else {
    console.log(`${firstName} ${lastName}, you will be major in ${18 - age} years`);
  }
};
//information("Alice", "Liddell", 7);
information("Sylvie", "Mémain-Yé", 57);
//information("Sofiane", "Akermoun", 39);

// OUTPUT Sylvie Mémain-Yé, you are major since 39 years
