const express = require('express');
const router = express.Router();
const { beranda,login } = require('../controler/mhsControler');
const { berandaD,daftarRPSDosen,cpmkD,tnilai,penilaianSave,tpert,pertemuanSave,tref,referensiSave, tcpmk, cpmkSave, cpmkE} = require('../controler/dosenControler');

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


router.get('/', beranda)
router.get('/login',login)


// router.get('/createCPMK', cpmkForm)
// router.post('/createCPMK', cpmkSave)
// // router.get('/editCPMK/:id_course', cpmkEdit)
// router.post('/updateCPMK/:id_course', cpmkUpdate)
// router.get('/deleteCPMK/:id_course', cpmkDelete)

module.exports = router;