const express = require("express");
const router = express.Router();

//route tambah RPS (Materi 6 = Dean Fisabil Andwi)
router.post("/tambahRPS", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "Mata Kuliah :": {
      "kode matkul": "JSI62125",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "3",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil ditambahkan");
});

//route mengubah RPS yang sudah ada (Materi 7 = Dean Fisabil Andwi)
router.post("/UbahRPS", (req, res) => {
  let add = {
    message: "Silahkan tambahkan RPS disini",
    "Mata Kuliah :": {
      "kode matkul": "JSI62126",
      "nama matkul": "Pemrograman Web",
      "jumlah sks": "2",
      semester: "4",
    },
  };
  res.json(add);
  console.log("RPS berhasil diubah");
});

//route revisi RPS yang sudah ada (Materi 8 = Dean Fisabil Andwi)
router.post("/RevisiRPS", (req, res) => {
    let add = {
      message: "Silahkan revisi RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web Lanjutan",
        "jumlah sks": "2",
        semester: "5",
      },
    };
    res.json(add);
    console.log("RPS berhasil direvisi");
  });
module.exports = router;