const express = require('express');
const router = express.Router();
const { allcpmk,berandaRPS,cpmkForm, cpmkSave, cpmkEdit,cpmkUpdate, cpmkDelete} = require('../controler/cpmkControler');


router.get('/', allcpmk);
router.get('/lihatRPS', berandaRPS)
router.get('/createCPMK', cpmkForm)
router.post('/createCPMK', cpmkSave)
router.get('/editCPMK/:id_course', cpmkEdit)
router.post('/updateCPMK/:id_course', cpmkUpdate)
router.get('/deleteCPMK/:id_course', cpmkDelete)

module.exports = router;