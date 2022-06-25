function panggilSplice() {
  let kota = ["Jakarta", "Medan", "Padang"];
  console.log(kota);

  kota.splice(2, 0, "Palembang");

  return kota;
}

console.log(panggilSplice());
