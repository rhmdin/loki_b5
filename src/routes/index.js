const express = require('express');
const router = express.Router();
const { berandaD,daftarRPSDosen,cpmkD,tnilai,penilaianSave,tpert,pertemuanSave,tref,referensiSave, tcpmk, cpmkSave, cpmkE} = require('../controler/dosenControler');
const { BerandaAdmin,RPSAdmin, petaCPMK, laporanRPS, persentaseRPS, tambahDosen } = require('../controler/adminController');
const { berandaMHS, viewRPS, cariRPS, login} = require('../controler/mhsControler');


router.get('/', berandaMHS);
router.get('/login', login);
router.get('/lihatRPS', viewRPS)
router.get('/cariRPS', cariRPS)
router.get('/berandaAdmin', BerandaAdmin)
router.get('/DaftarRPS', RPSAdmin)
router.get('/petaCPMK', petaCPMK)
router.get('/laporanRPS', laporanRPS)
router.get('/persentase', persentaseRPS)
router.get('/tambahcontributor', tambahDosen)
router.get('/berandaDosen', berandaD)
router.get('/daftarRPSDosen', daftarRPSDosen)
router.get('/lihatRPSDosen', cpmkD)
router.get('/tambahPenilaian', tnilai)
router.post('/tambahPenilaian', penilaianSave)
router.get('/tambahPertemuan', tpert)
router.post('/tambahPertemuan', pertemuanSave)
router.get('/tambahReferensi', tref)
router.post('/tambahReferensi', referensiSave)
router.get('/tambahCPMK', tcpmk)
router.post('/tambahCPMK', cpmkSave)
router.get('/editCPMK/:course_plan_detail_id', cpmkE)



// router.get('/createCPMK', cpmkForm)
// router.post('/createCPMK', cpmkSave)
// // router.get('/editCPMK/:id_course', cpmkEdit)
// router.post('/updateCPMK/:id_course', cpmkUpdate)
// router.get('/deleteCPMK/:id_course', cpmkDelete)

module.exports = router;