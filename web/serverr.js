const express = require("express");
const server = express();
const CPMK = require('./CPMK');
const komponen_nilai = require('./komponen_nilai');
const pertemuan_mingguan = require('./pertemuan_mingguan');
const referensi = require('./referensi');
const RPS = require('./RPS');
const port = 3000;

//route awal
server.get("/", (req, res) => {
  res.send("Berhasil terkoneksi");
});

//route halaman login (Materi 1) (Rahmadina)
server.get("/login", (req, res) => {
  res.send("Ini adalah bagian Halaman Login");
});

//route halaman logout (fungsional 2)
server.get("/logout", (req, res) => {
  res.send("Ini adalah bagian halaman logout :)");
});

server.use("/bagian", referensi);
server.use("/bagian", komponen_nilai);
server.use("/bagian", RPS);

server.use("/public", express.static("public"));


server.listen(port, () => {
  console.log(`Server berada pada port ${port}`);
});