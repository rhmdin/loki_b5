const express = require('express');
const fungsi21sampai23 = express();

fungsi21sampai23.listen (3000,function(){
    console.log("Server Ready");
});

fungsi21sampai23.get("/search", function(req,res){
    res.send("Data berhasil ditampilkan")
})

fungsi21sampai23.get("/detail", function(req,res){
    res.send("Detail RPS")
})

fungsi21sampai23.get("/generate-pdf", function(req,res){
    res.send("Generate Berhasil")
})

  
  
