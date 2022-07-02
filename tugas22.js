/*

Tugas 22 Javascript
Buatlah perulangan array dengan forEach yang mana array didapat
dari String “Saya ingin belajar bersama” sehingga jika ditampilkan
akan seperti gambar berikut ini :
Item : Saya index ke 0
Item : ingin index ke 1
Item : belajar index ke 2
Item : bersama index ke 3

*/

let aku = "Saya ingin belajar bersama";
let akuArray = aku.split(" ");
akuArray.forEach(function (item, index) {
  console.log("Item : ", item, " index ke ", index);
});
