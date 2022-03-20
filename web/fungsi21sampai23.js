const express = require('express');
const fungsi21sampai23 = express();
const pdf = require('html-pdf');

fungsi21sampai23.listen (3000,function(){
    console.log("Server Ready");
});

fungsi21sampai23.get("/materi6", function(req,res){
    res.send("Data berhasil ditampilkan")
})

  
  
