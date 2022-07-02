function arrayMap() {
  let kota = ["Jakarta", "Surabaya", "Bandung", "Palembang", "Depok"];
  kota.map(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

arrayMap();
