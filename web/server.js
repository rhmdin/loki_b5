const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.send("Server is connected")
  })
  
server.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

//Dean Fisabil Andwi
//Fungsi 6 Menambah RPS
server.get("/tambahRPS", function(req,res){
    res.send("nambah RPS gais")
})

server.post("/tambahRPS", (req, res) => {
    let add = {
      message: "Silahkan tambahkan RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62125",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "3",
        semester: "4",
      },
    };
    res.json(add);
    console.log("RPS berhasil ditambahkan");
  });

//Fungsi 7 Mengubah RPS
server.get("/UbahRPS", function(req,res){
    res.send("mengubah RPS gais")
})

//route mengubah RPS yang sudah ada (Materi 7 = Dean Fisabil Andwi)
server.post("/UbahRPS", (req, res) => {
    let add = {
      message: "Silahkan tambahkan RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "2",
        semester: "4",
      },
    };
    res.json(add);
    console.log("RPS berhasil diubah");
  });



//Fungsi 8 Revisi RPS
server.get("/RevisiRPS", function(req,res){
    res.send("Revisi RPS ni gais")
})

//route revisi RPS yang sudah ada (Materi 8 = Dean Fisabil Andwi)
server.post("/RevisiRPS", (req, res) => {
    let add = {
      message: "Silahkan revisi RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web Lanjutan",
        "jumlah sks": "2",
        semester: "5",
      },
    };
    res.json(add);
    console.log("RPS berhasil direvisi");
  });


//Fungsi 9 Tambah CPMK Kuliah
server.get("/TambahCPMK", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

//Fungsi 10 Hapus CPMK
server.get("/HapusCPMK", function(req,res){
    res.send("Hapus CPMK Kuliah")
});
