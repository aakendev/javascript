function nestedObjects() {
  let mahasiswa = {
    nama: "Ilham",
    ipk: {
      semester1: 3.5,
      semester2: 2.75,
      semester3: 3.25,
      semester4: 4,
    },
  };
  console.log(mahasiswa.ipk.semester2);
}

nestedObjects();
