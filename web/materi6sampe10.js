const express = require("express")
const { appendFile } = require("fs")
const materi6sampe10 = express()

materi6sampe10.listen (3000,function(){
    console.log("Berhasil Terkoneksi Ke Server")
})

materi6sampe10.get("/tambahRPS", function(req,res){
    res.send("nambah RPS gais")
})

materi6sampe10.get("/UbahRPS", function(req,res){
    res.send("mengubah RPS gais")
})

materi6sampe10.get("/RevisiRPS", function(req,res){
    res.send("Revisi RPS ni gais")
})

materi6sampe10.get("/TambahCPMK", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

materi6sampe10.get("/HapusCPMK", function(req,res){
    res.send("Hapus CPMK Kuliah")
})