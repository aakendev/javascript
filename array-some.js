let dataSiswa = [
  { nama: "Aldy", jKelamin: "Pria" },
  { nama: "Bambang", jKelamin: "Pria" },
  { nama: "Citra", jKelamin: "Wanita" },
  { nama: "Donna", jKelamin: "Wanita" },
];

console.log(dataSiswa.some((datasiswa) => datasiswa.jKelamin === "Pria"));
