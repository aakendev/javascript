let dataSiswa = [
  {
    nama: "Andi",
    jKelamin: "Pria",
  },
  {
    nama: "Budi",
    jKelamin: "Pria",
  },
  {
    nama: "Chika",
    jKelamin: "Wanita",
  },
  {
    nama: "Desi",
    jKelamin: "Wanita",
  },
];

let dataSiswaPria = dataSiswa.filter((dataSiswa) => {
  return dataSiswa.jKelamin === "Pria";
});

let dataSiswaWanita = dataSiswa.filter((dataSiswa) => {
  return dataSiswa.jKelamin === "Wanita";
});

console.log(dataSiswaPria);
console.log(dataSiswaWanita);
