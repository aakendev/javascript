function panggilPop() {
  let kota = ["Jakarta", "Bandung", "Medan", "Makassar"];
  console.log(kota);
  console.log("===================================");
  let kota2 = kota.pop();
  console.log(kota2);

  return kota;
}

console.log(panggilPop());
