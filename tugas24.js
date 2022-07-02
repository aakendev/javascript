/*

Tugas 24 Javascript
Buatlah sorting dan reverse dari deret angka array ini : 32, 33, 16, 40, 9, 7, 11, 2,
44, 1, 66 sehingga akan tampil seperti gambar berikut ini :

Sebelumnya : 32,33,16,40,9,7,11,2,44,1,66
Ascending : 1,11,16,2,32,33,40,44,66,7,9
Descending : 9,7,66,44,40,33,32,2,16,11,1
*/

let deretAngka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

console.log("Sebelumnya : " + deretAngka);
console.log("Ascending : " + deretAngka.sort());
console.log("Descending : " + deretAngka.reverse());
