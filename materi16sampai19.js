const express = require('express');
const { append } = require('express/lib/response');
const materi16sampai19 = express();

materi16sampai19.listen (3000,function(){
    console.log("Komponen berhasil diubah yayay");
})

app.get("/test",(req,res) => {
    res.send("Haihaihaii!!")
})