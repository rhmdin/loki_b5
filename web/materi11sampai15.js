const express = require('express');
const materi11sampai15 = express();

materi11sampai15.listen (3000,function(){
    console.log("Server okey");
});

materi11sampai15.get("/deletecpmk", function(req ,res) {
    res.send("Pilihan : Menghapus CPMK Mata Kuliah")
});

materi11sampai15.get("/addref", function(request ,response) {
    response.send("Pilihan : Menambah referensi")
});

materi11sampai15.post("/addref", function(request ,response) {
    response.send("Pilihan : Berhasil menambah referensi")
});

materi11sampai15.get("/updateref", function(request ,response) {
    response.send("Pilihan : Mengubah referensi")
});

materi11sampai15.post("/updateref", function(request ,response) {
    response.send("Pilihan : Berhasil mengubah referensi")
});

materi11sampai15.get("/deleteref", function(request ,response) {
    response.send("Pilihan : Menghapus referensi")
});

materi11sampai15.get("/addkompnilai", function(request ,response) {
    response.send("Pilihan : Menambah komponen penilaian")
});

materi11sampai15.post("/addkompnilai", function(request ,response) {
    response.send("Pilihan : Berhasil menambah komponen penilaian")
});

