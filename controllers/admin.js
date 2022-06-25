module.exports = {
  
    viewBeranda: (req, res) => {
      res.render("admin/berandaAdmin");
    },
    viewAdminEditDosen: (req, res) => {
      res.render("admin/view_admin-edit-dosen");
    },
    viewAdminInfoDosen: (req, res) => {
      res.render("admin/view_admin-info-dosen");
    },
    viewAdminInfoRPS: (req, res) => {
      res.render("admin/view_admin-info-rps");
    },
    viewAdminMatkul: (req, res) => {
      res.render("admin/view_admin-matkul");
    },
    viewAdminTambahDosen: (req, res) => {
      res.render("admin/view_admin-tambah-dosen");
    },
  };