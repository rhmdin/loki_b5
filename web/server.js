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

