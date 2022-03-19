const express = require('express');
const materi11sampai15 = express();

materi11sampai15.listen (3000,function(){
    console.log("Server oke");
});

materi11sampai15.get("/materi11", function(req ,res) {
    res.send("Pilihan : Menghapus CPMK Mata Kuliah")
});

materi11sampai15.get("/materi12", function(request ,response) {
    response.send("Pilihan : Menambah referensi")
});

materi11sampai15.get("/materi13", function(request ,response) {
    response.send("Pilihan : Mengubah referensi")
});

materi11sampai15.get("/materi14", function(request ,response) {
    response.send("Pilihan : Menghapus referensi")
});

materi11sampai15.get("/materi15", function(request ,response) {
    response.send("Pilihan : Menambah komponen penilaian")
});

