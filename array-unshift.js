function panggilUnshift() {
  let data = ["Bandung", "Surabaya", "Malang", "Padang", "Tangerang"];
  console.log(data);
  data.unshift("Jakarta", "Bali");
  return data;
}

console.log(panggilUnshift());
