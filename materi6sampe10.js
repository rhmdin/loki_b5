const express = require("express")
const { appendFile } = require("fs")
const materi6sampe10 = express()

materi6sampe10.listen (3000,function(){
    console.log("jalan gesss")
})

materi6sampe10.get("/", function(req,res){
    res.send("welkam to papji mobail")
})