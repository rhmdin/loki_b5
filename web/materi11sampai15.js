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

materi11sampai15.get("/updateref", function(request ,response) {
    response.send("Pilihan : Mengubah referensi")
});

materi11sampai15.get("/deleteref", function(request ,response) {
    response.send("Pilihan : Menghapus referensi")
});

materi11sampai15.get("/addkompnilai", function(request ,response) {
    response.send("Pilihan : Menambah komponen penilaian")
});

