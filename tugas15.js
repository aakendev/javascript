/*

Tugas 15 Javascript
Diketahui segitiga siku-siku ABC dengan siku-siku di B digambarkan
sebagai berikut :
A-B : 8cm
B-C : 6cm
A-C : ?
Rumus Sisi Miring = Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
Tentukan panjang sisi miring AC pada gambar di atas dengan menggunakan kode
program javascript dan wajib menggunakan fungsi POW dan SQRT. Lalu buatlah
tampilan output seperti gambar berikut ini :
Nilai AB : 8
Nilai BC : 6
Panjang sisi AC pada segitiga siku-siku tersebut adalah : 10 cm

*/

const cariSisiMiring = () => {
  let tinggi = 8;
  let alas = 6;
  let tinggiKuadrat = Math.pow(tinggi, 2);
  let alasKuadrat = Math.pow(alas, 2);
  let alasTinggi = tinggiKuadrat + alasKuadrat;
  let sisiMiring = Math.sqrt(alasTinggi);

  console.log("Nilai AB : ", tinggi);
  console.log("Nilai BC : ", alas);
  console.log(
    "Panjang sisi AC pada segitiga siku-siku tersebut adalah : ",
    sisiMiring,
    " cm"
  );
};

cariSisiMiring();
