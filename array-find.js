function arrayFind() {
  let angka = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let angkaFind = angka.find((element) => {
    return element > 10;
  });
  console.log(angkaFind);
}

arrayFind();
