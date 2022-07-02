/*

Tugas 25 Javascript
Buatlah filter,sorting dan reverse deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16
dengan ketentuan filter angka lebih besar dari 10 sehingga akan tampil seperti
gambar berikut ini :
Sebelumnya : 2,39,76,50,9,7,41,2,24,1,16
Ascending : 1,16,2,2,24,39,41,50,7,76,9
Descending : 9,76,7,50,41,39,24,2,2,16,1
Filter > 10 : 76,50,41,39,24,16

*/

let deretAngka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : " + deretAngka);
console.log("Ascending : " + deretAngka.sort());
console.log("Descending : " + deretAngka.reverse());
console.log("Filter > 10 : " + deretAngka.filter((angka) => angka > 10));
