function panggilShift() {
  let kota = ["Jakarta", "Bandung", "Malang", "Surabaya", "Makassar"];
  console.log(kota);
  console.log("=====================================");
  //   kota = kota.shift();

  let kota2 = kota.shift();
  console.log(kota2);

  return kota;
}

console.log(panggilShift());
