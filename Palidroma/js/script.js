/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
var parola = prompt("inserisci una parola e vediamo se è palindroma")
var parolaPalindroma =[];
var j = 0;
var k = 0;
var x = 0;
for (var i = parola.length - 1; i >= 0 ; i--) {
   parolaPalindroma.push(parola[i]);
   if (parola[x] == parolaPalindroma[j]) {
     k++;
   }
   j++;
   x++;
}

console.log(parola);
console.log(parolaPalindroma);

if (parola.length == k) {
console.log("La parola è palindroma");
} else {
  console.log("La parola non è palindroma");
}
