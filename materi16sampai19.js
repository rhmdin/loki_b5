const express = require('express');
const { append } = require('express/lib/response');
const materi16sampai19 = express();

materi16sampai19.listen (3000,function(){
    console.log("Komponen berhasil diubah yayay");
})

materi16sampai19.get("/materi16", function(req,res) {
    res.send("Ubah komponen penilaian")
})

materi16sampai19.get("/materi17", function(req,res) {
    res.send("Hapus komponen penilaian")
})

materi16sampai19.get("/materi18", function(req,res) {
    res.send("Tambah pertemuan mingguan RPS")
})

materi16sampai19.get("/materi19", function(req,res) {
    res.send("Ubah pertemuan mingguan yang ada dalam RPS")
})

