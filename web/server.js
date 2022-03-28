const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.send("Server is connected")
  })
  
server.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

//2011522012 Rahmadina Fungsi 1-5
server.get("/login", function(req,res) {
    res.send("Log in user")
})

server.get("/logout", function(req,res) {
    res.send("Log out user")
})

server.get("/userlist", function(req,res) {
    res.send("Daftar Pengguna")
})

server.get("/rpslist", function(req,res) {
    res.send("Daftar RPS")
})

server.get("/printrps", function(req,res) {
    res.send("Cetak RPS")
})

//Dean Fisabil Andwi
//Fungsi 6 Menambah RPS
server.get("/tambahRPS", function(req,res){
    res.send("nambah RPS gais")
})

server.post("/tambahRPS", (req, res) => {
    console.log("Tambah");
    let tambah = {
      message: "Silahkan tambahkan RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62125",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "3",
        semester: "4",
      },
    };
    res.json(tambah);
    console.log("RPS berhasil ditambahkan");
  });

//Fungsi 7 Mengubah RPS
server.get("/UbahRPS", function(req,res){
    res.send("mengubah RPS gais")
})

//route mengubah RPS yang sudah ada (Materi 7 = Dean Fisabil Andwi)
server.put("/UbahRPS", (req, res) => {
    console.log("Ubah RPS");
    let Ubah = {
      message: "Silahkan Ubah RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "2",
        semester: "4",
      },
    };
    res.json(Ubah);
    console.log("RPS berhasil diubah");
  });


//Fungsi 8 Revisi RPS
server.get("/RevisiRPS", function(req,res){
    res.send("Revisi RPS ni gais")
})

//route revisi RPS yang sudah ada (Materi 8 = Dean Fisabil Andwi)
server.post("/RevisiRPS", (req, res) => {
    console.log("Revisi RPS");
    let revisi = {
      message: "Silahkan revisi RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web Lanjutan",
        "jumlah sks": "2",
        semester: "5",
      },
    };
    res.json(revisi);
    console.log("RPS berhasil direvisi");
  });


//Fungsi 9 Tambah CPMK Kuliah
server.get("/TambahCPMK", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

server.post("/TambahCPMK", (req, res) => {
    console.log("Tambah Data CPMK");
    let obj = {
        "message": "Capaian Pembelajaran Mata Kuliah Sudah ditambahkan",
        "Keterangan": "menambah CPMK mata kuliah",
        "Nip ": "12345678912",
        "Nama": "Vladimir Putim M,Kom.",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "SIJs2102",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen web basic\n",
                    "2. Mahasiswa mampu menggunakan salah satu Bahasa pemrograman untuk membangun web localhost\n"],
        "Cek": "PENAMBAHAN DATA CPMK BERHASIL",
    }
    res.json(obj);
    console.log("\n\nBerhasil Menambah Data CPMK\n");
  });


//Fungsi Mengubah CPMK
server.get("/UbahCPMK", function(req,res){
    res.send("Mengubah CPMK Kuliah")
});

server.put("/UbahCPMK", (req, res) => {
      console.log("Mengubah Data CPMK");
      let obj = {
          "message": "Capaian Pembelajaran Mata Kuliah Sudah diubah",
          "Keterangan": "mengubah CPMK mata kuliah",
          "Nip ": "12345678912",
          "Nama": "Vladimir Putim M,Kom.",
          "Matkuliah yang diampu": "Pemograman Web",
          "Kode Matakuliah": "SIJs2102",
          "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen web basic dan juga advance\n",
                      "2. Mahasiswa mampu menggunakan Bahasa pemrograman Javascript untuk membangun web localhost\n"],
          "Cek": "Pengubahan DATA CPMK BERHASIL",
      }
      res.json(obj);
      console.log("\n\nBerhasil Mengubah Data CPMK\n");
});

//Reysha Irsyalina
//Fungsi 11 : Menghapus CMPK
server.get("/HapusCPMK", (req, res) => {
  res.send('Berhasil Menghapus CPMK Mata Kuliah')
});

server.delete("/HapusCPMK", (req, res) => {
  console.log("Menghapus CPMK");
  let hapuscpmk = {
    "message": "CPMK dihapus oleh Dosen",
    "nip ": 198201182008121002,
    "Nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "cpmk" : ["Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)"],
    "keterangan": "Berhasil"
    }
  res.json(hapuscpmk);
  console.log("CPMK berhasil dihapus");
});

//Fungsi 12 : Menambah Referensi
server.get("/tambahref", function(req ,res){
  res.send("Berhasil menambah referensi")
});

server.post("/tambahref", (req, res) => {
  console.log("Menambah Referensi");
  let tambahref = {
      "message": "Referensi ditambahkan oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(tambahref);
  console.log("Referensi berhasil ditambah");
});

//Fungsi 13 : Mengubah Referensi
server.get("/ubahref", function(req ,res) {
  res.send('Berhasil mengubah referensi')
});

server.put("/ubahref", (req, res) => {
  console.log("Mengubah Referensi");
  let ubahref = {
      "message": "Referensi diubah oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(ubahref);
  console.log("Referensi berhasil diubah");
});

//Fungsi 14 : Menghapus Referensi
server.get("/hapusref", function(req ,res) {
  res.send('Berhasil menghapus referensi')
});

server.delete("/hapusref", (req, res) => {
  console.log("Menghapus Referensi");
  let hapusref = {
      "message": "Referensi dihapus oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(hapusref);
  console.log("Referensi berhasil dihapus");
});

//Fungsi 15 : Menambah Komponen Penilaian
server.get("/tambahkompnilai", function(req ,res) {
  res.send("Berhasil menambah komponen penilaian")
});

server.post("/tambahkompnilai", (req, res) => {
  console.log("Menambah Komponen Penilaian");
  let tambahkompnilai = {
    "message": "Komponen penilaian ditambahkan oleh Dosen",
    "nip ": 198201182008121002,
    "nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "komponen penilaian" : ["Project", "Tugas", "Quiz", "UTS", "UAS"],
    "keterangan": "Berhasil"
    }
  res.json(tambahkompnilai);
  console.log("Komponen Penilaian berhasil ditambah");
});

//Rzki Juni Darmawan
//Fungsi 20 : menghapus pertemuan mingguan yang ada dalam RPS
server.get('/RPS/hapus-pertemuan', function(request, response){
	response.send('Ini adalah halaman Dosen menghapus pertemuan mingguan yang ada dalam RPS')
})
// hapus_pertemuan
server.delete("/RPS/hapus_pertemuan", (req, res) => {
  let pertemuan = {
     "message": "Silahkan masukkan pertemuan yang akan dihapus",
      "kode matkul": " ",
      "Jadwal": "",
      "keterangan": "berhasil di hapus",
      "status":1
    }
    res.json(pertemuan);
  });

//Fungsi 21 : melakukan pencarian berdasarkan nama mata kuliah atau kode matakuliah
server.get("/search", function(req,res){
  res.send("Data RPS yang dicari berhasil ditampilkan")
})

//Fungsi 22 : menampilkan detail RPS
server.get("/detail", function(req,res){
  res.send("Detail RPS")
})

//Fungsi 23 : Ekspor RPS menjadi PDF
server.get("/generate-pdf", function(req,res){
  res.send("Generate PDF Berhasil")
})

