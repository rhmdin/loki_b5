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
server.post("/UbahRPS", (req, res) => {
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

server.put("/TambahCPMK", (req, res) => {
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
    server.post("/TambahCPMK", (req, res) => {
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

//Fungsi 11 : Menghapus CMPK
server.delete("/cpmk/:id", function(req ,res) {
    const ID = request.params.id;
    res.send('Berhasil menghapus CPMK Mata Kuliah id: ${ID}')
});

//Fungsi 12 : Menambah referensi
server.post("/referensi/", function(req ,res){
    res.send("Berhasil menambah referensi")
});

//Fungsi 13 : Mengubah referensi
server.put("/referensi/:id", function(req ,res) {
    const ID = request.params.id;
    res.send('Berhasil mengubah referensi id: ${ID}')
});

//Fungsi 14 : Menghapus referensi
server.delete("/referensi/:id", function(req ,res) {
    const ID = request.params.id;
    res.send('Berhasil menghapus referensi id: ${ID}')
});

//Fungsi 15 : Menambah komponen penilaian
server.post("/kompnilai/", function(req ,res) {
    res.send("Berhasil menambah komponen penilaian")
});
});
