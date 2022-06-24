/*

Tugas 7 JS
1. Pastikan Teman Teman Sudah Menginstall Node JS
2. Teman - Teman Buatlah File di Folder javascript teman teman
sebuah file dengan nama file tugas7.js
3. Buatlah Program Dengan Spesifikasi dibawah ini :
- Buatlah sebuah variabel array dengan maksimal data 10
nilai yang berisikan tinggi badan;
- Tampilkan array tersebut dengan menggunakan
perulangan biasa dan perulangan for off.
Teman-teman analisis perbedaan hasilnya,
Hint : -
4. Happy Codding :)

*/

let tinggiBadan = [165, 170, 175, 180, 185, 190, 195, 200, 205, 210];

for (let i = 0; i < tinggiBadan.length; i++) {
  console.log("Tinggi Badan :", tinggiBadan[i]);
}

for (let j of tinggiBadan) {
  console.log("Tinggi Badan :", j);
}
