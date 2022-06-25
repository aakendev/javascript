function panggilObject() {
  let mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "Putih",
    tahun: [2001, 2015, 2020],
  };

  mobil.warna = "Hitam";
  console.log(mobil);
  console.log(mobil.warna);
  console.log(mobil.type);
  console.log(mobil.harga);
  console.log(mobil.tahun);
  console.log(mobil.tahun[1]);
}

panggilObject();
