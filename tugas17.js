/*

Tugas 17 Javascript
1.
Ubahlah kalimat berikut menjadi lower case dan upper case :
●
Saya beLajar bahaSa peMrograman deNgan khUsuk. (ubah ke lower
case dan upper case)
●
Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN
GaBuS 3 Ekor dan LanGsuNg Dijual. (ubah ke lower case dan upper
case)
hasil running :
2.
Tentukan Kode ASCII enam index dari awal dari kalimat berikut :
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book. It has survived not only five centuries, but also
the leap into electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets containing
Lorem Ipsum passages, and more recently with desktop publishing
software like Aldus PageMaker including versions of Lorem Ipsum.
hasil running :

*/

let kalimatSatu = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
let kalimatDua =
  "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";
console.log(kalimatSatu.toLowerCase());
console.log(kalimatSatu.toUpperCase());
console.log(kalimatDua.toLowerCase());
console.log(kalimatDua.toUpperCase());

let kalimatLorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
let loremArray = [];
for (let x = 0; x < 6; x++) {
  loremArray.push(kalimatLorem.charCodeAt(x));
}
console.log(loremArray.join("-"));
