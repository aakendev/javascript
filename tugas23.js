/*

Tugas 23 Javascript
Buatlah filter deret bilangan 32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66 dengan
ketentuan angka lebih besar dari 15 sehingga akan tampil seperti gambar berikut
ini :

*/

let deretBil = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
let deretAngka = deretBil.filter((deretbil) => deretbil >= 15);
console.log(deretAngka);
