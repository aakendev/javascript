/*

Tugas 4 JS
1. Pastikan Teman Teman Sudah Menginstall Node JS
2. Teman - Teman Buatlah File di Folder javascript teman teman
sebuah file dengan nama file tugas4.js
3. Buatlah Program Dengan Spesifikasi dibawah ini :
- Buatlah 3 buah variabel dengan yang berisi nilai tinggi
badan siswa
- Setelah itu teman teman gunakanlah fungsi dari if else
untuk mengetahui siswa yang memiliki tinggi badan
-
tertinggi
Setelah itu teman teman tampilkan hasilnya dari urutan
yang tertinggi ke yang terpendek.
4. Happy Codding :)

*/

let tinggiSatu = 300;
let tinggiDua = 200;
let tinggiTiga = 100;

const urutTinggi = () => {
  if (tinggiSatu > tinggiDua) {
    if (tinggiDua > tinggiTiga) {
      console.log(tinggiSatu);
      console.log(tinggiDua);
      console.log(tinggiTiga);
    } else {
      console.log(tinggiSatu);
      console.log(tinggiTiga);
      console.log(tinggiDua);
    }
  } else if (tinggiDua > tinggiTiga) {
    if (tinggiSatu > tinggiTiga) {
      console.log(tinggiDua);
      console.log(tinggiSatu);
      console.log(tinggiTiga);
    } else {
      console.log(tinggiDua);
      console.log(tinggiTiga);
      console.log(tinggiSatu);
    }
  } else {
    if (tinggiSatu > tinggiDua) {
      console.log(tinggiTiga);
      console.log(tinggiSatu);
      console.log(tinggiDua);
    } else {
      console.log(tinggiTiga);
      console.log(tinggiDua);
      console.log(tinggiSatu);
    }
  }
};

urutTinggi();
