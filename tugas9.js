/*

Tugas 9 JS
1. Pastikan Teman Teman Sudah Menginstall Node JS
2. Teman - Teman Buatlah File di Folder javascript teman teman
sebuah file dengan nama file tugas9.js
3. Buatlah Program Dengan Spesifikasi dibawah ini :
- Buatlah sebuah variabel object versi teman teman.
- Tampilkan berikan nilai pada masing masing properti objek
yang teman teman buat
- Setelah itu tampilkan objectnya dengan perulangan for in.
Hint : -
4. Happy Codding :)

*/

let game = {
  genre: "RPG",
  umur: "18+",
  tahun: 2020,
  harga: 120000,
};

for (let x in game) {
  console.log(game[x]);
}
