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
server.get("/login/:usn", function(req,res) {
    res.status("200");
    const USN = req.params.usn;
    const logIn = {
        "Akun" :  {
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun)+ USN);
    console.log("\n\nBerhasil Log In");
});

//fungsi2
server.get("/logout/:usn", function(req,res) {
    res.status("200");
    const USN = req.params.usn;
    const logIn = {
        "Akun" :  {
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun)+ USN);
    console.log("\n\nBerhasil Log Out");
});

//fungsi3
server.get("/userlist", function(req,res) {
    res.send("Daftar Pengguna");
});

//fungsi4
server.get("/rpslist", function(req,res) {
    res.send("Daftar RPS");
});

//fungsi5
server.get("/printrps", function(req,res) {
    res.send("Cetak RPS");
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

