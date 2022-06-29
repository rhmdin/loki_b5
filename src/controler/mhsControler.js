const { raw } = require('express');


module.exports = {
  
    berandaMHS: (req, res) => {
      res.render("mahasiswa/beranda");
    },
    cariRPS: (req, res) => {
      res.render("mahasiswa/cariRPS");
    },
    viewRPS: (req, res) => {
      res.render("mahasiswa/rps");
    }
  };