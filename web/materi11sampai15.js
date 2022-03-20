const express = require('express');
const materi11sampai15 = express();

materi11sampai15.listen (3000,function(){
    console.log("Server okey");
});

materi11sampai15.delete("/deletecpmk", function(req ,res) {
    res.send("Pilihan : Menghapus CPMK Mata Kuliah")
});

materi11sampai15.get("/ref", function(request ,response) {
    response.send("Daftar referensi")
});

materi11sampai15.post("/addref", function(request ,response) {
    response.send("Pilihan : Menambah referensi")
});

materi11sampai15.put("/updateref", function(request ,response) {
    response.send("Pilihan : Mengubah referensi")
});

materi11sampai15.delete("/deleteref", function(request ,response) {
    response.send("Pilihan : Menghapus referensi")
});

materi11sampai15.get("/kompnilai", function(request ,response) {
    response.send("Daftar komponen penilaian")
});

materi11sampai15.post("/addkompnilai", function(request ,response) {
    response.send("Pilihan : Menambah komponen penilaian")
});

