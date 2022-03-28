const express = require('express');
const server = express();
const fs = require('fs');
server.get("/", (req, res) => {
    res.send("Server is connected")
  })
  
server.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

//Fungsi 1
server.post("/login/:usn", function(req,res) {
    res.status("200");
    console.log("\n\nBerhasil Log In");
    const logIn = {
        "Akun" :  {
            "NIP" : req.params.usn,
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun));
});

//fungsi2
server.post("/logout/:usn", function(req,res) {
    res.status("200");
    console.log("\n\nBerhasil Log Out");
    const logIn = {
        "Akun" :  {
            "NIP" : req.params.usn,
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun));
});

//fungsi3 mengubah daftar dosen yang bisa mengubah rps
server.put("/rpsdetail", (req,res) => {
    res.status("200");
    let detailRps = {
        "Detail_RPS" : {
            "Kode_Matkul" : req.params.idrps,
            "Matkul" : "Pemograman Web",
            "SKS" : 4,
            "Dosen" : ["Husnil Kamil", "Surya Afnarius"]
        },
    }; 
    res.json(detailRps);
      console.log("\n\nBerhasil Mengubah Dosen yang Mengajar\n");
});

//fungsi4
server.get("/rpsreport", function(req,res) {
    let rpsReport = {
    "RPS" : [{
        "Kode_Matkul" : "jsi123",
        "Metode" : "PBL",
        "Jumlah Revisi" : "3 kali",
    }, {
        "Kode_Matkul" : "jsi456",
        "Metode" : "CBL",
        "Jumlah Revisi" : "1 kali",
    }],
    "Persentase" : {"PBL" : "30%", "CBL" : "50%"}
    };     
    const report = JSON.parse(JSON.stringify(rpsReport)); 
    res.send(res.json(report));
    console.log("\n\nDaftar RPS");
});

//fungsi5
server.get("/printrps:idrps", function(req,res) {
    res.send("Cetak RPS"+req.params.idrps+" Berhasil");
});

