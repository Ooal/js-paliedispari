/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var btn = document.getElementById('print');

btn.addEventListener ("click" , function () {

  var scelta = document.getElementById('ParieDispari').value;
  var numUtente = parseInt(document.getElementById('num').value);
  var numComputer = getRandomInt(1, 5);
  console.log(scelta);
  console.log(numUtente);
  console.log(numComputer);


  var totale = numUtente + numComputer;

  if ((!(totale % 2)) && scelta == "Pari") {
    console.log("Hai vinto, complimenti !!");
  } else if ((totale % 2) && scelta == "Dispari") {
    console.log("Hai vinto, complimenti !!");
  } else {
    console.log("Ha vinto il pc, ritenta");
  }

});
