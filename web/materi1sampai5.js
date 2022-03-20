const express = require('express');
const materi1sampai5 = express();

materi1sampai5.get("/", (req, res) => {
    res.send("Alhamdulillah bisaa ges dah nyambung")
  })

materi1sampai5.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

materi1sampai5.get("/login", function(req,res) {
    res.send("Log in user")
})

materi1sampai5.get("/logout", function(req,res) {
    res.send("Log out user")
})

materi1sampai5.get("/userlist", function(req,res) {
    res.send("Daftar Pengguna")
})

materi1sampai5.get("/rpslist", function(req,res) {
    res.send("Daftar RPS")
})
materi1sampai5.get("/printrps", function(req,res) {
    res.send("Cetak RPS")
})