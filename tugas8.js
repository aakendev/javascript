/*

Tugas 8 JS
1. Pastikan Teman Teman Sudah Menginstall Node JS
2. Teman - Teman Buatlah File di Folder javascript teman teman
sebuah file dengan nama file tugas8.js
3. Buatlah Program Dengan Spesifikasi dibawah ini :
- Buatlah sebuah variabel object versi teman teman.
- Tampilkan nilai awal dari masing masing object yang
teman teman buat.
- Setelah itu teman teman lakukan perubahan nilai pada
salah satu object yang teman teman buat dan tampilkan
kembali.
Hint : -
4. Happy Codding :)

*/

let handphone = {
  layar: "WXGA",
  processor: "SD888",
  ram: 8192,
  internal: "256GB",
};

console.log(handphone);
console.log("Aku punya handphone dengan layar ", handphone.layar);
handphone.layar = "VGA";
console.log("Aku punya handphone dengan layar ", handphone.layar);
