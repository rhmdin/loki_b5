const express = require('express');
const router = express.Router();
const { beranda,berandaRPS,cpmkForm, cpmkSave, cpmkEdit,cpmkUpdate, cpmkDelete} = require('../controler/cpmkControler');


router.get('/', beranda);
router.get('/lihatRPS', berandaRPS)
router.get('/createCPMK', cpmkForm)
router.post('/createCPMK', cpmkSave)
router.get('/editCPMK/:id_course', cpmkEdit)
router.post('/updateCPMK/:id_course', cpmkUpdate)
router.get('/deleteCPMK/:id_course', cpmkDelete)

module.exports = router;