const express = require('express');
const server = express();

var router = express.Router();

server.get("/", (req, res) => {
    res.send("Server is connected")
  })
  
server.listen (3000,function(){
    console.log("Alhamdulillah bisaa ges dah nyambung")
})

//Rdina 2012
//Fungsi 1
server.post("/login/:usn", function(req,res) {
    res.status("200");
    console.log("\n\nBerhasil Log In");
    const logIn = {
        "Akun" :  {
            "NIP" : req.params.usn,
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun));
});

//fungsi2
server.post("/logout/:usn", function(req,res) {
    res.status("200");
    console.log("\n\nBerhasil Log Out");
    const logIn = {
        "Akun" :  {
            "NIP" : req.params.usn,
            "Username" : "HusnilK",
            "Jabatan" : "Kajur SI",
        },
    };
    const akun = JSON.parse(JSON.stringify(logIn));
    
    res.send(res.json(akun));
});

//fungsi3 mengubah daftar dosen yang bisa mengubah rps
server.put("/rpsdetail", (req,res) => {
    res.status("200");
    let detailRps = {
        "Detail_RPS" : {
            "Kode_Matkul" : req.params.idrps,
            "Matkul" : "Pemograman Web",
            "SKS" : 4,
            "Dosen" : ["Husnil Kamil", "Surya Afnarius"]
        },
    }; 
    res.json(detailRps);
      console.log("\n\nBerhasil Mengubah Dosen yang Mengajar\n");
});

//fungsi4
server.get("/rpsreport", function(req,res) {
    let rpsReport = {
    "RPS" : [{
        "Kode_Matkul" : "jsi123",
        "Metode" : "PBL",
        "Jumlah Revisi" : "3 kali",
    }, {
        "Kode_Matkul" : "jsi456",
        "Metode" : "CBL",
        "Jumlah Revisi" : "1 kali",
    }],
    "Persentase" : {"PBL" : "30%", "CBL" : "50%"}
    };     
    const report = JSON.parse(JSON.stringify(rpsReport)); 
    res.send(res.json(report));
    console.log("\n\nDaftar RPS");
});

//fungsi5
server.get("/printrps:idrps", function(req,res) {
    res.send("Cetak RPS"+req.params.idrps+" Berhasil");
});

//Dean Fisabil Andwi
//Fungsi dosen melihat RPS
server.get("/lihatRPS", function(req,res){
  res.send("Lihat RPS gais")
})
//Fungsi Lihat detail rps
server.get("/detailRPS", function(req,res){
  res.send("Lihat Detail RPS gais")
})

//Fungsi 6 Menambah RPS
server.get("/tambahRPS", function(req,res){
    res.send("nambah RPS gais")
})

server.post("/tambahRPS", (req, res) => {
    console.log("Tambah");
    let tambah = {
      message: "Silahkan tambahkan RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62125",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "3",
        semester: "4",
      },
    };
    res.json(tambah);
    console.log("RPS berhasil ditambahkan");
  });

//Fungsi 7 Mengubah RPS
server.get("/UbahRPS", function(req,res){
    res.send("mengubah RPS gais")
})

//route mengubah RPS yang sudah ada (Materi 7 = Dean Fisabil Andwi)
server.put("/UbahRPS", (req, res) => {
    console.log("Ubah RPS");
    let Ubah = {
      message: "Silahkan Ubah RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web",
        "jumlah sks": "2",
        semester: "4",
      },
    };
    res.json(Ubah);
    console.log("RPS berhasil diubah");
  });


//Fungsi 8 Revisi RPS
server.get("/RevisiRPS", function(req,res){
    res.send("Revisi RPS ni gais")
})

//route revisi RPS yang sudah ada (Materi 8 = Dean Fisabil Andwi)
server.post("/RevisiRPS", (req, res) => {
    console.log("Revisi RPS");
    let revisi = {
      message: "Silahkan revisi RPS disini",
      "Mata Kuliah :": {
        "kode matkul": "JSI62126",
        "nama matkul": "Pemrograman Web Lanjutan",
        "jumlah sks": "2",
        semester: "5",
      },
    };
    res.json(revisi);
    console.log("RPS berhasil direvisi");
  });


//Fungsi 9 Tambah CPMK Kuliah
server.get("/TambahCPMK", function(req,res){
    res.send("Tambah CPMK Kuliah")
})

server.post("/TambahCPMK", (req, res) => {
    console.log("Tambah Data CPMK");
    let tambahcpmk = {
        "message": "Capaian Pembelajaran Mata Kuliah Sudah ditambahkan",
        "Keterangan": "menambah CPMK mata kuliah",
        "Nip ": "12345678912",
        "Nama": "Vladimir Putim M,Kom.",
        "Matkuliah yang diampu": "Pemograman Web",
        "Kode Matakuliah": "SIJs2102",
        "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen web basic\n",
                    "2. Mahasiswa mampu menggunakan salah satu Bahasa pemrograman untuk membangun web localhost\n"],
        "Cek": "PENAMBAHAN DATA CPMK BERHASIL",
    }
    res.json(tambahcpmk);
    console.log("\n\nBerhasil Menambah Data CPMK\n");
  });


//Fungsi 10 Mengubah CPMK
server.get("/UbahCPMK", function(req,res){
    res.send("Mengubah CPMK Kuliah")
});

server.put("/UbahCPMK", (req, res) => {
      console.log("Mengubah Data CPMK");
      let ubahcpmk = {
          "message": "Capaian Pembelajaran Mata Kuliah Sudah diubah",
          "Keterangan": "mengubah CPMK mata kuliah",
          "Nip ": "12345678912",
          "Nama": "Vladimir Putim M,Kom.",
          "Matkuliah yang diampu": "Pemograman Web",
          "Kode Matakuliah": "SIJs2102",
          "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen web basic dan juga advance\n",
                      "2. Mahasiswa mampu menggunakan Bahasa pemrograman Javascript untuk membangun web localhost\n"],
          "Cek": "Pengubahan DATA CPMK BERHASIL",
      }
      res.json(ubahcpmk);
      console.log("\n\nBerhasil Mengubah Data CPMK\n");
});

//dosen lihat cpmk
server.get("/lihatCPMK", function(req,res){
  res.send("Lihat CPMK per mata kuliah gais")
})

server.put("/LihatCPMK", (req, res) => {
  console.log("Melihat Data CPMK");
  let lihatcpmk = {
      "message": "Capaian Pembelajaran Mata Kuliah Sudah diubah",
      "Keterangan": "mengubah CPMK mata kuliah",
      "Nip ": "12345678912",
      "Nama": "Vladimir Putim M,Kom.",
      "Matkuliah yang diampu": "Pemograman Web",
      "Kode Matakuliah": "SIJs2102",
      "CPMK": [   "1. Mahasiswa mampu menjelaskan konsep dasar dan komponen web basic dan juga advance\n",
                  "2. Mahasiswa mampu menggunakan Bahasa pemrograman Javascript untuk membangun web localhost\n"],
      "Cek": "Pengubahan DATA CPMK BERHASIL",
  }
  res.json(lihatcpmk);
});

//Reysha Irsyalina
//Fungsi 11 : Menghapus CMPK
server.get("/HapusCPMK", (req, res) => {
  res.send('Berhasil Menghapus CPMK Mata Kuliah')
});

server.delete("/HapusCPMK", (req, res) => {
  console.log("Menghapus CPMK");
  let hapuscpmk = {
    "message": "CPMK dihapus oleh Dosen",
    "nip ": 198201182008121002,
    "Nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "cpmk" : ["Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)"],
    "keterangan": "Berhasil"
    }
  res.json(hapuscpmk);
  console.log("CPMK berhasil dihapus");
});

//Fungsi 12 : Menambah Referensi
server.get("/tambahref", function(req ,res){
  res.send("Berhasil menambah referensi")
});

server.post("/tambahref", (req, res) => {
  console.log("Menambah Referensi");
  let tambahref = {
      "message": "Referensi ditambahkan oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(tambahref);
  console.log("Referensi berhasil ditambah");
});

//Fungsi 13 : Mengubah Referensi
server.get("/ubahref", function(req ,res) {
  res.send('Berhasil mengubah referensi')
});

server.put("/ubahref", (req, res) => {
  console.log("Mengubah Referensi");
  let ubahref = {
      "message": "Referensi diubah oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(ubahref);
  console.log("Referensi berhasil diubah");
});

//Fungsi 14 : Menghapus Referensi
server.get("/hapusref", function(req ,res) {
  res.send('Berhasil menghapus referensi')
});

server.delete("/hapusref", (req, res) => {
  console.log("Menghapus Referensi");
  let hapusref = {
      "message": "Referensi dihapus oleh Dosen",
      "nip ": 198201182008121002,
      "Nama": "Husnil Kamil M.T",
      "mata kuliah" : "Pemograman Web",
      "kode" : "JSI62125",
      "sks" : 3,
      "semester" : 4,
      "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
      "keterangan": "Berhasil"
    }
  res.json(hapusref);
  console.log("Referensi berhasil dihapus");
});

//dosen melihat referensi
server.get("/lihatref", function(req ,res) {
 res.send('Lihat referensi')
});
server.put("/lihattref", (req, res) => {
  console.log("Melihat Referensi");
  let referensi = {
    "nip ": 198201182008121002,
    "Nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "referensi": ["Matt Doyle, 2009, “Beginning PHP 5.3”, Wrox"],
  }
  res.json(referensi);
})

//Fungsi 15 : Menambah Komponen Penilaian
server.get("/tambahkompnilai", function(req ,res) {
  res.send("Berhasil menambah komponen penilaian")
});

server.post("/tambahkompnilai", (req, res) => {
  console.log("Menambah Komponen Penilaian");
  let tambahkompnilai = {
    "message": "Komponen penilaian ditambahkan oleh Dosen",
    "nip ": 198201182008121002,
    "nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "komponen penilaian" : ["Project", "Tugas", "Quiz", "UTS", "UAS"],
    "keterangan": "Berhasil"
    }
  res.json(tambahkompnilai);
  console.log("Komponen Penilaian berhasil ditambah");
});

//Pawal Atakosi
//Fungsi 16 : Mengubah komponen penilalian
server.get("/ubahkompnilai", function(req,res){
  res.send("Mengubah komponen penilaian")
})

server.put("/ubahkompnilai", (req, res) => {
  let ubahkomp = {
    "message": "Silahkan ubah komponen penilaian disini",
    "nip ": 198201182008121002,
    "nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "komponen penilaian" : ["Project", "Tugas", "Quiz", "UTS", "UAS"],
    "keterangan": "Berhasil",
    "status": 1
  };
  res.json(ubahkomp);
  console.log("Komponen penilaian berhasil diubah");
});

//Fungsi 17 : Menghapus komponen penilaian
server.get("/delkompnilai", function(req,res){
  res.send("Menghapus komponen penilaian")
})

server.delete("/delkompnilai", (req, res) => {
  let delkomp = {
    "message": "Silahkan hapus komponen penilaian disini",
    "nip ": 198201182008121002,
    "nama": "Husnil Kamil M.T",
    "mata kuliah" : "Pemograman Web",
    "kode" : "JSI62125",
    "sks" : 3,
    "semester" : 4,
    "komponen penilaian" : ["Project", "Tugas", "Quiz", "UAS"],
    "keterangan": "Berhasil",
    "status": 1
  };
  res.json(delkomp);
  console.log("Komponen penilaian berhasil dihapus");
});

//Fungsi 18 : Menambah pertemuan mingguan yang ada dalam RPS
server.get("/RPS/addpertemuan", function(req,res){
  res.send("Menambah pertemuan mingguan")
})

server.post("/RPS/addpertemuan", (req, res) => {
  let addpert = {
    "message": "Silahkan masukkan pertemuan yang ingin ditambah",
    "kode matkul": " ",
    "Jadwal": "",
    "keterangan": "berhasil",
    "status":1
  };
  res.json(addpert);
  console.log("Pertemuan mingguan berhasil ditambah");
  });

//melihat komponen penilaiain
server.get("/lihatpenilaian", function(req ,res) {
  res.send('Lihat penilaian')
 });
 server.put("/lihattref", (req, res) => {
  console.log("Melihat Penilaian");
  let peniliaian = {
    "Mata Kuliah": "XXXXXX",
    "Nama Dosen": "Husnil Kamil M.T",
  }
  res.json(peniliaian);
  
})

//Fungsi 19 : Mengubah pertemuan mingguan yang ada dalam RPS
server.get("/RPS/ubahPertemuan", function(req,res){
  res.send("Mengubah pertemuan mingguan")
})

server.put("/RPS/ubahPertemuan", (req, res) => {
  let ubahpert = {
    "message": "Silahkan masukkan pertemuan yang akan diubah",
    "kode matkul": " ",
    "Jadwal": "",
    "keterangan": "berhasil",
    "status":1
  };
  res.json(ubahpert);
  console.log("Pertemuan mingguan berhasil diubah");
  });

//Rizki Juni Darmawan
//Fungsi 20 : menghapus pertemuan mingguan yang ada dalam RPS
server.get('/RPS/hapus_pertemuan', function(request, response){
	response.send('Ini adalah halaman Dosen menghapus pertemuan mingguan yang ada dalam RPS')
})
// hapus_pertemuan
server.delete("/RPS/hapus_pertemuan", (req, res) => {
  let pertemuan = {
    "message": "Silahkan masukkan pertemuan yang akan dihapus",
    "kode matkul": " ",
    "Jadwal": "",
    "keterangan": "berhasil di hapus",
    "status":1
    }
    res.json(pertemuan);
  });

//Fungsi 21 : melakukan pencarian berdasarkan nama mata kuliah atau kode matakuliah
server.get("/search", function(req,res){
  res.send("Data RPS yang dicari berhasil ditampilkan")
})

//Fungsi 22 : menampilkan detail RPS
server.get("/detail", function(req,res){
  res.send("Detail RPS")
})

//dosen melihat pert mingguan
server.get("/lihatpmingguan", function(req ,res) {
  res.send('Lihat refetensi')
 });
 server.put("/lihatpmingguan", (req, res) => {
  console.log("Melihat Pertemuan Mingguan");
  let pertemuan_mingguan = {
  }
  res.json(pertemuan_mingguan);
})
//Fungsi 23 : Ekspor RPS menjadi PDF
server.get("/generate-pdf", function(req,res){
  res.send("Generate PDF Berhasil")
})


module.exports = router;
