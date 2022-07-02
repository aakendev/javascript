function arrayFindIndex() {
  let angka = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  let angkaFindIndex = angka.findIndex((element) => {
    return element > 12;
  });
  console.log(angkaFindIndex);
}

arrayFindIndex();
