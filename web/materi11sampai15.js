const express = require('express');
const materi11sampai15 = express();

materi11sampai15.get("/materi11", function(req ,res) {
    res.send("Menghapus CPMK Mata Kuliah")
});

materi11sampai15.get("/materi12", function(request ,response) {
    response.send("Menambah referensi")
});

materi11sampai15.get("/materi13", function(request ,response) {
    response.send("Mengubah referensi")
});

materi11sampai15.get("/materi14", function(request ,response) {
    response.send("Menghapus referensi")
});

materi11sampai15.get("/materi15", function(request ,response) {
    response.send("Menambah komponen penilaian")
});

materi11sampai15.listen (3000,function(){
    console.log("Server oke");
});
