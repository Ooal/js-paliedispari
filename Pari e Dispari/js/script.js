/*JSNACK JSNACK 4
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.*/

var array1 =[1, 2, 4, 6, 8, 9];
var array2 =[1, 2, 4];


while (array1.length != array2.length ) {

  if (array1.length > array2.length) {
    array2.push(parseInt(Math.random()*(10)));
  } else if (array1.length < array2.length) {
    array1.push(parseInt(Math.random()*(10)));
  }
}

console.log(array1);
console.log(array2);
