/*
isLeapYear.js

Ecrivez une fonction "isLeapYear" qui prendra comme paramètre un nombre,
qui correspondra à une année, et qui retournera true si l'année est bissextile
ou bien false si elle ne l'est pas.
D'après wikipedia:
Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile
(comportant 366 jours) que dans l’un des deux cas suivants :

- si l'année est divisible par 4 et non divisible par 100 ;
- si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).
Pour calculer le reste d'une division il faut utiliser l'opérateur %
*/

/*
Année bissextile, année de 366 jours, revenant tous les 4 ans et dont le mois de février comporte 29 jours.
(Une année bissextile doit avoir son millésime divisible par 4. Mais si le millésime est divisible par 100
il doit aussi l'être par 400 : 2000 était bissextile ; 1700, 1800 et 1900 ne l’ont pas été.)
*/

const isLeapYear = (year) => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return `The year ${year} is a leap year`; // true
  } else if (year % 400 === 0) {
    return `The year ${year} is a leap year`; // true
  } else {
    return `The year ${year} is not a leap year`; // false
  }
};

console.log(isLeapYear(2021));

/*
OUTPUT :
The year 1700 is not a leap year
The year 1900 is not a leap year
The year 2000 is a leap year
The year 2004 is a leap year
The year 2007 is not a leap year
The year 2021 is not a leap year
*/
