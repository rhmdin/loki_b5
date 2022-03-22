const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.send("Server is connected")
  })
server.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

//2011522012 Rahmadina Fungsi 1-5
server.get("/login", function(req,res) {
    res.send("Log in user")
})

server.get("/logout", function(req,res) {
    res.send("Log out user")
})

server.get("/userlist", function(req,res) {
    res.send("Daftar Pengguna")
})

server.get("/rpslist", function(req,res) {
    res.send("Daftar RPS")
})
server.get("/printrps", function(req,res) {
    res.send("Cetak RPS")
})