let dataSiswa = [
  { nama: "Andi", jKelamin: "Pria" },
  { nama: "Budi", jKelamin: "Pria" },
  { nama: "Cinta", jKelamin: "Wanita" },
  { nama: "Dewi", jKelamin: "Wanita" },
];

console.log(dataSiswa.every((datasiswa) => datasiswa.jKelamin === "Wanita"));
