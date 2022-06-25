function panggilObject() {
  let mahasiswa = {
    nama: "Aldy",
    umur: 30,
    jurusan: "Informatika",
    semester: 7,
  };
  for (let x in mahasiswa) {
    console.log(mahasiswa[x]);
  }
}

panggilObject();
