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
server.put("/rpslist/rpsdetail:idrps", (req,res) => {
    res.status("200");
    let detailRps = {
        "Detail_RPS" : {
            "Kode_Matkul" : req.params.idrps,
            "Matkul" : "Pemograman Web",
            "SKS" : 4,
            "Dosen" : ["Husnil Kamil", "Surya Afnarius"]
        },
    }; 
    const detail = JSON.parse(JSON.stringify(detailRps));
    
    res.send(res.json(detail));
    console.log("\n\nDetail RPS");
});

//fungsi4
server.get("/rpslist", function(req,res) {
    let rpsList = {
    "Detail_RPS" : {
        "Kode_Matkul" : req.params.idrps,
        "Matkul" : "Pemograman Web",
        "SKS" : 4,
        "Dosen" : ["Husnil Kamil", "Surya Afnarius"]
    },
}; 
    res.send("Daftar RPS dengan id" + req.params.idrps);
});

//fungsi5
server.get("/printrps:idrps", function(req,res) {
    res.send("Cetak RPS"+req.params.idrps+" Berhasil");
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

